import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegisterUserDTO } from './dto/register-user.dto';
import { loginUserDTO } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthDecorato, GetUser } from './decorators';
import { Auth } from './entities/auth.entity';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createAuthDto: RegisterUserDTO) {
    return this.authService.create(createAuthDto);
  }
  @Post('login')
  login(@Body() createAuthDto: loginUserDTO) {
    return this.authService.login(createAuthDto);
  }

  @Patch('jefe/perfil')
  @AuthDecorato(ValidRoles.jefe, ValidRoles.coordinadora, ValidRoles.madre)
  getPerfil(@GetUser() user: Auth, @Body() data: UpdateAuthDto) {
    return this.authService.getPerfil(data, user);
  }
}
