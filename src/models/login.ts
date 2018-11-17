export class Login{
    
    constructor(login:any = null)
    {
        if(!login){
            return;
        }

        this._username = login._username;
        this._password = login._password;
    }
    
    private _username:string;

    get username():string{
        return this._username;
    }

    set username(username:string){
        this._username = username;
    }

    private _password:string;

    get password():string{
        return this._password;
    }

    set password(password:string){
        this._password = password;
    }
}