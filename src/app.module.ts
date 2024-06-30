import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { HistoriaRecojoModule } from './modules/historia-recojo/historia-recojo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Super',
      password: '1234',
      database: 'vaso_de_leche',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    HistoriaRecojoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}