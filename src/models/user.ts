import { Login } from "./login";
import { ArticleSource } from "./article-source";

export class User
{
    public constructor(user:any = null)
    {
        if(!user){
            this._login = new Login();
            this._sources = new Array();
            
            return;
        }
        
        this._login = new Login(user._login);
        
        this._sources = [];
        for(let currentSource of user._sources)
        {
            this._sources.push(new ArticleSource(currentSource));
        }        
    }
    
    private _id:number;

    get id():number{
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }
    
    private _login:Login;

    get login():Login{
        return this._login;
    }

    set login(login:Login){
        this._login = login;
    }

    private _sources:ArticleSource[];

    get sources():ArticleSource[]{
        return this._sources;
    }

    set sources(sources:ArticleSource[]){
        this._sources = sources;
    }
}