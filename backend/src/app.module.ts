import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 32769,
    username: 'admin',
    password: '12345678',
    database: 'musica',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:true,
    dropSchema:true,
  })
,UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
