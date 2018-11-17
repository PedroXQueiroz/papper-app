import { ArticleSource } from "./article-source";

export class Article{
    
    constructor(article:any)
    {
        this._author = article.author;
        this._title = article.title;
        this._content = article.content;
        this._url = article.url;
        this._urlToImage = article.urlToImage;
        this._publishedAt = article.publishedAt;
    }
    
    private _source:ArticleSource;

    get source():ArticleSource{
        return this._source;
    } 

    set source(source:ArticleSource){
        this._source = source;
    }

    private _author:string;
    
    get author():string{
        return this._author;
    }

    set author(author:string){
        this._author = author;
    }

    private _title:string;

    get title():string {
        return this._title;
    }

    set title(title:string){
        this._title = title;
    }

    private _description:string;

    get description():string{
        return this._description;
    }

    set description(description:string){
        this._description = description;
    }
    
    private _url:string;

    get url():string{
        return this._url;
    }

    set url(url:string){
        this._url = url;
    }

    private _urlToImage:string;

    get urlToImage():string{
        return this._urlToImage;
    }

    private _publishedAt:string;

    get publishedAt():string{
        return this._publishedAt;
    }

    set publishedAt(publishedAt:string){
        this._publishedAt= publishedAt;
    }

    private _content:string;

    get content():string{
        return this._content;
    }

    set content(content:string){
        this._content = content;
    }
}