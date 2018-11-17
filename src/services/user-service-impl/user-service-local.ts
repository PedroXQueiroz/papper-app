import { UserService } from "../user-service";
import { Login } from "../../models/login";
import { User } from "../../models/user";
import { ArticleSource } from "../../models/article-source";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { AuthException } from "../../exceptions/auth-exception";
import { RegisterException } from "../../exceptions/register-excpetion";

@Injectable()
export class UserServiceLocal implements UserService {
    
    constructor(private _storage:Storage){}
    
    async authenticate(login: Login): Promise<User> {
        
        let usersData = await this._storage.get('users');
        
        if(!usersData)
        {
            throw new AuthException();
        }
        
        for(let currentUserData of usersData)
        {
            let currentUser:User = new User(currentUserData);
            if (currentUser.login.username == login.username && currentUser.login.password == login.password)
            {
                return currentUser;
            }
        }
        
        throw new AuthException();
    }
    async register(user: User): Promise<User> {
        
        let usersData:any = await this._storage.get('users');
        
        let users:User[]
        if(!usersData){
            users = new Array();
        }else{

            users = usersData.map(usrData => new User(usrData));
        }
        
        let userIndex = users.findIndex(usr => usr.login.username == user.login.username);

        if(userIndex != -1)
        {
            throw new RegisterException('username alredy exists');
        }
    

        this._validateUser(user);

        let userId:number = users.length + 1;
        user.id = userId;
        users.push(user);
        this._storage.set('users', users);

        return user;
    }
    
    remove(user: User) {
        throw new Error("Method not implemented.");
    }

    async update(user: User) {
        let usersData:any = await this._storage.get('users');
        
        if(!usersData)
        {
            return;
        }
        
        let users:User[] = usersData.map(usr => new User(usr));
        

        let userIndex:number = users.findIndex(usr => usr.id == user.id);

        users[userIndex] = user;

        await this._storage.set('users', users);
    }

    private _validateUser(user: User) {
        if (!user.login.username || user.login.username == '') {
            throw new RegisterException('Is required inform a username');
        }
        if (!user.login.password || user.login.password == '') {
            throw new RegisterException('Is required inform a password');
        }
        if (!user.sources || user.sources.length < 1) {
            throw new RegisterException('Is required at last one new source');
        }
    }
}