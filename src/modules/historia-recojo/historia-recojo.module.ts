import { Module } from '@nestjs/common';
import { HistoriaRecojoService } from './historia-recojo.service';
import { HistoriaRecojoController } from './historia-recojo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoriaRecojo } from './entities/historia-recojo.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([HistoriaRecojo]),],
  controllers: [HistoriaRecojoController],
  providers: [HistoriaRecojoService],
})
export class HistoriaRecojoModule {}
