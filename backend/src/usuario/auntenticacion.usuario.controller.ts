import { Controller, Body, BadRequestException, Post } from '@nestjs/common';
import { generarUsuario } from './funciones/generar-usuario';
import { validate } from 'class-validator';
import { UsuarioService } from './usuario.service';
@Controller('autenticacion')
export class AuntenticacionUsuario {
    constructor(private readonly _usuarioService: UsuarioService) { }
    @Post('login')
    async login(
        @Body('correo') correo,
        @Body('password') password
    ) {
        const usuarioALogearse = generarUsuario(correo, password);
        const arregloUsuarios = await validate(usuarioALogearse);
        const existenErrores = arregloUsuarios.length > 0;
        if (existenErrores) {
            console.log('Errores logeado al usuario', arregloUsuarios);
            throw new BadRequestException('errorees logeando al user');
        } else {
            const usuarioEncontrado = await this._usuarioService.econtrarEmail(usuarioALogearse.correo)
            if (usuarioEncontrado) {
                if (usuarioALogearse.password == usuarioEncontrado.password) {
                    return usuarioEncontrado
                }
                else {
                    throw new BadRequestException('Erorr en la contrasenia');

                }

            } else {
                throw new BadRequestException('Error en el login')
            }
            return 'Ok'
        }
    }

    @Post('restablecerContrasenia')
     async restablecerContraseña(
        @Body('actualizacion') actualizacion,
        @Body('correo') correo
    ) {
        console.log('llega',actualizacion,correo)
        const idUsuarioEncontrado = this._usuarioService.econtrarEmail(correo)
        idUsuarioEncontrado.then(respuesta => {
            respuesta.id
            console.log('se actualizo',actualizacion,correo)
            return this._usuarioService.editar(respuesta.id, actualizacion)
        }).
            catch(error => {
                return console.log(error, ' al restablecer contraseña')
            })
    }
}
