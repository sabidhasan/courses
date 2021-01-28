import { Task } from "../tasks/task.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  
  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(() => Task, task => task.user, { eager: true })
  tasks: Task[];
}