import { RolData } from 'src/data/rol.data';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ValidRoles } from '../interfaces';
import { HistoriaRecojo } from 'src/modules/historia-recojo/entities/historia-recojo.entity';

@Entity('users')
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', name: 'user_password', select: false })
  userPassword: string;

  @Column({ type: 'text', name: 'user_nombre' })
  userNombre: string;

  @Column({ type: 'text', name: 'user_apellido' })
  userApellido: string;

  @Column({ type: 'text', name: 'user_celular' })
  userCelular: string;

  @Column({ type: 'text', name: 'user_direccion' })
  userDireccion: string;

  @Column({ type: 'text', name: 'user_tipo_documento', nullable: true })
  userTipoDocumento: string;

  @Column({ type: 'text', name: 'user_numero_documento', nullable: true })
  userNumeroDocumento: string;

  @Column({ type: 'text', name: 'user_zona' })
  userZona: string;

  @Column({ type: 'text', name: 'user_cantidad_hijos' })
  userCantidadHijos: string;

  @Column({ type: 'text', name: 'user_numero_beneficiario', nullable: true })
  userNumeroBeneficiario: string;

  @Column({ type: 'text', name: 'user_correo_electronico', unique: true })
  userCorreoElectronico: string;

  @Column({ type: 'text', default: ValidRoles.madre })
  rol: string;

  @Column({ type: 'boolean', name: 'is_active', default: true })
  isActive: boolean;


  @OneToMany(() => HistoriaRecojo, (historiaRecojo) => historiaRecojo.auth)
  historiaRecojos: HistoriaRecojo[];


  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.userCorreoElectronico = this.userCorreoElectronico
      .toLocaleLowerCase()
      .trim();
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
