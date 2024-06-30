import { Auth } from 'src/auth/entities/auth.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('historia-recojo')
export class HistoriaRecojo {
  @PrimaryGeneratedColumn('increment')
  codigo: number;

  @Column({ type: 'text', name: 'historia_recojo_fecha' })
  historiaRecojoFecha: string;

  @Column({ type: 'text', name: 'historia_recojo_hora' })
  historiaRecojoHora: string;

  @Column({ type: 'int', name: 'historia_recojo_cantidad_total_leche' })
  historiaRecojoCantidadTotalLeche: number;

  @Column({ type: 'int', name: 'historia_recojo_cantidad_total_cereal' })
  historiaRecojoCantidadTotalCereal: number;

  @Column({ type: 'text', name: 'historia_recojo_estado' })
  historiaRecojoEstado: string;

  @Column({ type: 'text', name: 'historia_recojo_observacion' })
  historiaRecojoObservacion: string;

  @Column({ type: 'boolean', name: 'is_active', default: true })
  isActive: boolean;

  @ManyToOne(() => Auth, (auth) => auth.historiaRecojos)
  auth: Auth;
}