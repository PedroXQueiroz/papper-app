export class ArticleSource{
    private _id:string;

    constructor(source:any = null){
        
        if(!source){
            return;
        }

        this._id = source.id || source._id;
        this._category = source.category || source._category;
        this._country = source.country || source._country;
        this._description = source.description || source._description;
        this._name = source.name ||  source._name;
    }

    get id():string
    {
        return this._id;
    }

    set id(id:string){
        this._id = id;
    }

    private _name:string;

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }

    private _description:string;

    get description():string{
        return this._description;
    }

    set description(desc:string){
        this._description = this.description;
    }

    private _category:string;

    get category():string{
        return this._category;
    }

    set category(category:string){
        this._category = category;
    }

    private _country:string;

    get country():string{
        return this._country;
    }

    set country(country:string){
        this._country = country;
    }
}