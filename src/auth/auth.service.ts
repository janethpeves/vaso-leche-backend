import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Auth } from './entities/auth.entity';
import * as bcrypt from 'bcrypt'; // Importación correcta de bcrypt
import { RegisterUserDTO } from './dto/register-user.dto';
import { loginUserDTO } from './dto/login-user.dto';
import { JwtPayload } from './interfaces';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly userRepository: Repository<Auth>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createAuthDto: RegisterUserDTO): Promise<any> {
    try {
      const { userPassword, ...createAuth } = createAuthDto;
      const hashedPassword = bcrypt.hashSync(userPassword, 10); // Asegúrate de que bcrypt esté correctamente importado
      const user = this.userRepository.create({
        ...createAuth,
        isActive: true,
        userPassword: hashedPassword,
      });

      await this.userRepository.save(user);
      delete user.userPassword;
      return {
        ...user,
        token: this.getJwtToken({
          id: user.id,
        }),
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async login(loginDto: loginUserDTO): Promise<any> {
    try {
      const { userPassword, userCorreoElectronico } = loginDto;
      const user = await this.userRepository.findOne({
        where: { userCorreoElectronico },
        select: ['userCorreoElectronico', 'userPassword', 'id'],
      });
      if (!user)
        throw new BadRequestException('Credentials are not valid (email)');
      if (!bcrypt.compareSync(userPassword, user.userPassword))
        throw new UnauthorizedException('Credentials are not valid (password)');

      return {
        ...user,
        token: this.getJwtToken({
          id: user.id,
        }),
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getPerfil(data: UpdateAuthDto, token: Auth) {
    try {
      await this.userRepository.update(token.id, data);

      return await this.userRepository.findOne({
        where: {
          id: token.id,
        },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  private getJwtToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload);
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException('Please check server logs');
  }
}
