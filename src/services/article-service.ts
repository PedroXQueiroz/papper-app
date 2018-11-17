import { ArticleFilter } from "../models/article-filter";
import { Article } from "../models/article";
import { ArticleSource } from "../models/article-source";

export interface ArticleService{
    list(reportFilters:ArticleFilter):Promise<Article[]>;
    getSources():Promise<ArticleSource[]>;
}