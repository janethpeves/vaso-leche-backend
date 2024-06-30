import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoriaRecojoService } from './historia-recojo.service';
import { CreateHistoriaRecojoDto } from './dto/create-historia-recojo.dto';
import { UpdateHistoriaRecojoDto } from './dto/update-historia-recojo.dto';

@Controller('historia-recojo')
export class HistoriaRecojoController {
  constructor(private readonly historiaRecojoService: HistoriaRecojoService) {}

  @Post()
  create(@Body() createHistoriaRecojoDto: CreateHistoriaRecojoDto) {
    return this.historiaRecojoService.create(createHistoriaRecojoDto);
  }

  @Get()
  findAll() {
    return this.historiaRecojoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historiaRecojoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoriaRecojoDto: UpdateHistoriaRecojoDto) {
    return this.historiaRecojoService.update(+id, updateHistoriaRecojoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historiaRecojoService.remove(+id);
  }
}
