import { IsString } from 'class-validator';

export class loginUserDTO {
  @IsString()
  userCorreoElectronico: string;

  @IsString()
  userPassword: string;
}
