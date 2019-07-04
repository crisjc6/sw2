import { isString } from "util";
import {IsString, IsEmail, IsOptional}from 'class-validator';
export class UsuarioLoginDto{

@IsEmail()
correo:string;

@IsString()
password:string;

}
export class UsuarioDto{
    @IsOptional()
    @IsString()
    nombre:string;

    @IsEmail()
    @IsOptional()
    correo:string;

    @IsString()
    @IsOptional()
    password:string;

    @IsString()
    @IsOptional()
    telefono:string;


}