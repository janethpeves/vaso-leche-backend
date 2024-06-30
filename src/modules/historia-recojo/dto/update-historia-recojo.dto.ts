import { PartialType } from '@nestjs/swagger';
import { CreateHistoriaRecojoDto } from './create-historia-recojo.dto';

export class UpdateHistoriaRecojoDto extends PartialType(CreateHistoriaRecojoDto) {}
