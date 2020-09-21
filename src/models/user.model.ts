import {Table, Column, Model, HasMany, PrimaryKey} from 'sequelize-typescript';

export interface IUser {
    id: number
    name: string
}

@Table({
    tableName: "User"
})
export default class User extends Model implements IUser {

    @PrimaryKey
    @Column
    id!: number

    @Column
    name!: string
}