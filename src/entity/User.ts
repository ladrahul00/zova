import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name:"user"})
export class User {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({nullable:false})
    firstName: string;

    @Column({nullable:true})
    lastName: string;

    @Column({nullable:false})
    age: number;

}
