import { Controller, Get, Body, Param, Post, Query } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
@Controller('usuario')
export class UsuarioController{
    constructor(private readonly _usuarioService:UsuarioService){}

    @Get('listar')
    async obtenerTodos(
        @Body('skip')skip,
        @Body('limit')limit
    ){
        console.log(skip,limit)
        return await this._usuarioService.obtenerTodos(skip,limit);
    }
    @Get('encontrarUno/:id')
    async obtenerUno(
        @Param('id')id
    ){
        return await this._usuarioService.obtenerUno(id);
    }
    @Get('contador')
    async contador(
       //@Query()objectPaginacion:paginacion
     ){
         const conosulta={id:'id'}
         console.log(this._usuarioService.contador(
             conosulta
             //objectPaginacion.consulta
             ))
         console.log('esta contando en controller')
         return  await this._usuarioService.contador(
             conosulta
             //objectPaginacion.consulta
             );
     }
     @Get('buscar')
     async buscar(
         @Query()objetoPaginacion:paginacion
     ){
         return this._usuarioService.buscar(objetoPaginacion.skip,objetoPaginacion.limit,objetoPaginacion.consulta)
     }
    @Post('crear')
    async crear(
        @Body()usuario
    ){  
        return await this._usuarioService.crear(usuario);
    }
    @Post('actualizar')
    async editar(
        @Body('id')id,
        @Body('actualizacion')actualizaciones
    ){
        return await this._usuarioService.editar(id,actualizaciones)
    }
    @Post('eliminar')
    eliminar(
        @Body('id')id   
    ){
        
        return this._usuarioService.eliminar(id)
    }



}
export interface paginacion{
    skip:number
    limit:number
    consulta:object
}