import { UsuarioEntity } from './usuario.entity';
import { Injectable } from "@nestjs/common";
import { Repository, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioDto } from './usuario-login-dto';

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(UsuarioEntity)
    private readonly _usarioRepository: Repository<UsuarioEntity>) { }

    async econtrarEmail(correo: string): Promise<UsuarioEntity> {
        const opciones: FindOneOptions = {
            where: {
                correo
            }
        };
        const usuarioEncontrado = this._usarioRepository.findOne(opciones)
        return usuarioEncontrado

    }
    async editar(id: number, actualizacionesUsuario: UsuarioEntity) {
        return await this._usarioRepository.update(id, actualizacionesUsuario)

    }
    async obtenerUno(id: number) {
        return await this._usarioRepository.findOne(id);

    }
    async obtenerTodos(skip: number, limit: number) {
        console.log(skip,limit)
        return await this._usarioRepository.find({
            order: {
                id: 'ASC'
            },
            skip: skip,
            take: limit
        })
    }
    async crear(usuario) {
        console.log('servicio para crear usuario',usuario)
        return await this._usarioRepository.save(usuario);

    }
    async eliminar(id:number){

        return await this._usarioRepository.delete(id);
    }

    async buscar(skip:number, limit:number,consulta:object):Promise<UsuarioEntity[]>{
        return await this._usarioRepository.find({
            order:{id:'DESC'},
            skip:skip,
            take:limit,
            where:consulta
        })
    }
    async contador(
        consulta:object
        ){
        console.log('el numero de registros es:',this._usarioRepository.count())
         return await this._usarioRepository.count(
            {
            where:consulta
        }
        )
    }

}