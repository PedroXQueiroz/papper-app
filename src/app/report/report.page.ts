import { Component, OnInit, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { ArticleService } from '../../services/article-service';
import { Article } from '../../models/article';
import { User } from '../../models/user';
import { ArticleFilter } from '../../models/article-filter';
import { NavParams, NavController, PopoverController } from '@ionic/angular';
import { Session } from '../../session';
import { MenuService } from '../../services/menu-service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  private _articles: Article[];

  get articles():Article[]{
    return this._articles;
  }
  
  constructor(@Inject("report-service") private _reportService:ArticleService, 
              private _session:Session,
              private _popoverCtrl:PopoverController,
              private _sideMenu:MenuService) 
    { }

  ionViewWillEnter(){
    this._loadNews();
  }

  async ngOnInit() {
    await this._loadNews();
  }

  public reload(){
    this._loadNews();
  }

  private async _loadNews() {
    let currentUser: User = this._session.user;
    let defaultFilter: ArticleFilter = new ArticleFilter();
    currentUser.sources.forEach((source) => defaultFilter.sources.push(source));
    const articles = await this._reportService.list(defaultFilter);
    this._articles = articles;
  }

  public async showOptions($event){
    this._sideMenu.toggle();
  }

}
