import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ArticleServiceNewsApi } from '../../services/article-service-impl/article-service-news-api';
import { Session } from '../../session';
import { SourcesModalPage } from '../sources-modal/sources-modal.page';
import { SourcesModalPageModule } from '../sources-modal/sources-modal.module';
import { UserServiceLocal } from '../../services/user-service-impl/user-service-local';
import { InvalidPasswordExcpetion } from '../../exceptions/invalid-password-excpetion';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  entryComponents: [SourcesModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)    
  ],
  declarations: [ProfilePage, SourcesModalPage],
  providers: [{
    provide:'article', useClass:ArticleServiceNewsApi},
    {provide:'user', useClass:UserServiceLocal}, 
    Session],

})
export class ProfilePageModule {}
