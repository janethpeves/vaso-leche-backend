import { Injectable } from '@nestjs/common';
import { CreateHistoriaRecojoDto } from './dto/create-historia-recojo.dto';
import { UpdateHistoriaRecojoDto } from './dto/update-historia-recojo.dto';

@Injectable()
export class HistoriaRecojoService {
  create(createHistoriaRecojoDto: CreateHistoriaRecojoDto) {
    return 'This action adds a new historiaRecojo';
  }

  findAll() {
    return `This action returns all historiaRecojo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historiaRecojo`;
  }

  update(id: number, updateHistoriaRecojoDto: UpdateHistoriaRecojoDto) {
    return `This action updates a #${id} historiaRecojo`;
  }

  remove(id: number) {
    return `This action removes a #${id} historiaRecojo`;
  }
}
