import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavParams } from '@ionic/angular';

import { ReportPage } from './report.page';
import { ArticleServiceNewsApi } from '../../services/article-service-impl/article-service-news-api';
import { Session } from '../../session';
import { MenuService } from '../../services/menu-service';

const routes: Routes = [
  {
    path: '',
    component: ReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportPage],
  providers:[
    {provide:'report-service', useClass:ArticleServiceNewsApi}, 
    Session, 
    MenuService]
})
export class ReportPageModule {}
