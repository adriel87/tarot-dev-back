import { User } from "../";
import { ModifyResult, WithId, DeleteResult } from 'mongodb'

export interface UserRepository {
    getUsers: ()=> Promise<User[]>;
    getUser: ( id :string ) => Promise<User>;
    saveUser: ( user: User) => Promise<number | User[]> | Promise<ModifyResult<User>>;
    deleteUser: ( id: string ) => Promise<DeleteResult> | Promise<User[]>;
    getUserByEmailAndPassword : (email :string , password: string) => Promise<User> | null;
}