import { Injectable } from "@angular/core";
import { ArticleService } from "../article-service";
import { ArticleFilter } from "../../models/article-filter";
import { Article } from "../../models/article";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ArticleSource } from "../../models/article-source";

@Injectable()
export class ArticleServiceNewsApi implements ArticleService {
    
    private getConfig():NewsApiConfig{
        let config = new NewsApiConfig;
        config.apiToken = "0038476deec4450e8ae2597cc1b30411";
        config.newsApiRoute = "https://newsapi.org/v2/";
        return config;
    }

    private _config:NewsApiConfig;
    
    public constructor(private _httpClient:HttpClient){
        this._config = this.getConfig();
    }

    async list(reportFilters: ArticleFilter): Promise<Article[]> {
        
        let listAllRoute:string = this._config.newsApiRoute + "everything";
        let params:HttpParams = new HttpParams().set('apiKey', this._config.apiToken);
        
        if(reportFilters.sources){
            reportFilters.sources.forEach(source => { params = params.set('sources', source.id) } );
        }
        
        const getArticlesResponse = await this._httpClient.get<any>(listAllRoute, { params: params }).toPromise();
        
        let articles: Article[] = [];
        for(let article of getArticlesResponse.articles){
            articles.push(new Article(article));
        }

        return articles;
    }

    async getSources(): Promise<ArticleSource[]> {
        
        let params:HttpParams = new HttpParams().set('apiKey', this._config.apiToken);
        
        const sourcesResponse = await this._httpClient.get<any>(this._config.newsApiRoute + "sources", { params: params }).toPromise();
        
        let sources:ArticleSource[] = [];
        for(let source of sourcesResponse.sources)
        {
            sources.push(new ArticleSource(source));
        }
        
        return sources;
    }
}

class NewsApiConfig{

    private _apiToken:string;

    get apiToken():string{
        return this._apiToken;
    }

    set apiToken(apiToken:string){
        this._apiToken = apiToken;
    }

    private _newsApiRoute:string;

    get newsApiRoute():string{
        return this._newsApiRoute;
    }

    set newsApiRoute(route:string){
        this._newsApiRoute = route;
    }
}