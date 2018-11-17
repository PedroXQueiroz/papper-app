import { Login } from "../models/login";
import { User } from "../models/user";

export interface UserService{
    authenticate(login:Login):Promise<User>;
    register(user:User):Promise<User>;
    update(user:User):Promise<void>;
    remove(user:User);
}