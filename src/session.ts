import { Injectable } from "@angular/core";
import { User } from "./models/user";

@Injectable()
export class Session{

    private static _user:User;

    get isLogged():boolean{
        return Session._user != null && Session._user != undefined;
    }

    get user():User{
        let userToUse:User = Session._user ? Session._user : new User();
        return userToUse;
    }

    set user(user:User){
        Session._user = user;
    }

}