import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SourcesModalPage } from './sources-modal.page';
import { ArticleServiceNewsApi } from '../../services/article-service-impl/article-service-news-api';

const routes: Routes = [
  {
    path: '',
    component: SourcesModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SourcesModalPage],
  exports: [SourcesModalPage],
  providers: [{provide:'article', useClass:ArticleServiceNewsApi}]
})
export class SourcesModalPageModule {}
