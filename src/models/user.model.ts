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

/*import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface UserAttributes {
    id: number;
    name: string;
}
export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
};

export function UserFactory (sequelize: Sequelize): UserStatic {
    return <UserStatic>sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
}*/