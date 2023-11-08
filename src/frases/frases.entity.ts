import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Frase {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  Texto: string;
  
  @Column()
  Autor: string;

}