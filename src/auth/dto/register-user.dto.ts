import { IsEmail, IsString } from 'class-validator';
import { ToUpperCase } from 'src/utils/ToUpperCase';

export class RegisterUserDTO {

  @IsString()
  @ToUpperCase()
  userNombre: string;

  @IsString()
  @ToUpperCase()
  userApellido: string;

  @IsString()
  @ToUpperCase()
  userCelular: string;

  @IsString()
  @ToUpperCase()
  userDireccion: string;

  @IsString()
  @ToUpperCase()
  userCantidadHijos: string;
  
  @IsString()
  @IsEmail()
  userCorreoElectronico: string;

  @IsString()
  userPassword: string;


  @IsString()
  @ToUpperCase()
  userZona: string;


}
