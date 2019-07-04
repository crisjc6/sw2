import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({type:'varchar',name:'nombre',length:50})
    nombre:string;
    
    @Column({type:'varchar',name:'correo',length:50,unique:true})
    correo:string;

    @Column({type:'varchar',name:'password'})
    password:string;

    @Column({type:'varchar',name:'telefono'})
    telefono:string
}