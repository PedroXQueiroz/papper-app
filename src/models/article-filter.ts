import { ArticleSource } from "./article-source";

export class ArticleFilter{
    
    constructor(){
        this._sources = [];
    }
    
    private _sources:ArticleSource[];

    get sources():ArticleSource[]{
        return this._sources;
    }

    set sources(sources:ArticleSource[]){
        this._sources = sources;
    }
}