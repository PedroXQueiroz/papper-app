import { Component, OnInit, Inject } from '@angular/core';
import { Login } from '../../models/login';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user';
import { NavController, ToastController } from '@ionic/angular';
import { UrlTree, UrlSegmentGroup } from '@angular/router';
import { Session } from '../../session';
import { AuthException } from '../../exceptions/auth-exception';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private _login:Login;

  get login():Login{
    return this._login;
  }

  set login(login:Login){
    this._login = login;
  }

  constructor(@Inject("user-service") private _userService:UserService,
              private _navController: NavController, 
              private _currentSession:Session,
              private _toastCtrl:ToastController) { }

  ngOnInit() {
    this._login = new Login();
  }

  public async submitLogin(){
    try{

      let currentuser:User = await this._userService.authenticate(this._login);

      this._currentSession.user = currentuser;
      
      this._navController.navigateForward("report");

    }catch(ex){
    
      let toast;
      
      if(ex instanceof AuthException){
        toast = await this._toastCtrl.create({
          message: ex.message,
          duration: 3600,
          position: 'bottom'
        });
      }else{
        toast = await this._toastCtrl.create({
          message: 'unknow error',
          duration: 3600,
          position: 'bottom'
        })
      }

      console.error(ex);

      toast.present();
    }
  }

  public registerNewUser(){
    
    // VISANDO QUE UM NOVO USUÁRIO SERÁ CRIADO, O QUE ESTÁ LOGADO NO MOMENTO NÃO DEVE SER MODIFICADO
    // PARA ISSO ELE É DESLOGADO PARA QUE NÃO SEJA HABILITADA A EDIÇÃO DELE NA PÁGINA DE PERFIL (PROFILE)
    this._currentSession.user = null;
    
    this._navController.navigateForward("profile");
  }
}
