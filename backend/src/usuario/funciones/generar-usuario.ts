import { UsuarioLoginDto } from './../usuario-login-dto';
export function generarUsuario(correo,password):UsuarioLoginDto{
    const usuarioLogin =new UsuarioLoginDto
    usuarioLogin.correo=correo
    usuarioLogin.password=password
    return usuarioLogin
}