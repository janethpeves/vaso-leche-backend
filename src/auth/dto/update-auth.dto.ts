import { ToUpperCase } from 'src/utils/ToUpperCase';
import { IsEmail, IsString } from 'class-validator';

export class UpdateAuthDto {
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
  userTipoDocumento: string;

  @IsString()
  @ToUpperCase()
  userNumeroDocumento: string;
  @IsString()
  @ToUpperCase()
  userCantidadHijos: string;

  @IsString()
  @IsEmail()
  userCorreoElectronico: string;
}
