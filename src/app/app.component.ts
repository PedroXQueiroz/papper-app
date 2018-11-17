import { Component, ViewChild } from '@angular/core';

import { Platform, Menu, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuService } from '../services/menu-service';
import { Session } from '../session';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  @ViewChild("sideMenu") sideMenu:any ;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _menuService :MenuService,
    private _session: Session,
    private _navController: NavController
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      this.sideMenu.side = "end";
      this._menuService.setMenu(this.sideMenu);
    });
  }

  public editProfile(){
    this._navController.navigateForward('profile');
    this._menuService.toggle();
  }

  public logout(){
    
    this._session.user = null;

    this._navController.navigateRoot('login');

    this._menuService.toggle();
  }
}
