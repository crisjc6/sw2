import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from "./usuario.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuntenticacionUsuario } from './auntenticacion.usuario.controller';
import { UsuarioController } from './usuario.controller';

@Module({
  imports:[TypeOrmModule.forFeature([UsuarioEntity])] ,
  providers:[UsuarioService],
  controllers:[AuntenticacionUsuario,UsuarioController]
    
})
export class UsuarioModule{
  
}