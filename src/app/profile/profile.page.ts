import { Component, OnInit, Inject } from '@angular/core';
import { ArticleService } from '../../services/article-service';
import { User } from '../../models/user';
import { Session } from '../../session';
import { ModalController, AlertController, NavController, ToastController } from '@ionic/angular';
import { SourcesModalPage } from '../sources-modal/sources-modal.page';
import { OverlayEventDetail } from '@ionic/core';
import { ArticleSource } from '../../models/article-source';
import { UserService } from '../../services/user-service';
import { RegisterException } from '../../exceptions/register-excpetion';
import { InvalidPasswordExcpetion } from '../../exceptions/invalid-password-excpetion';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private _user: User;
  private _isNew: boolean;

  private _currentPassword:string;

  get currentPassword():string{
    return this._currentPassword;
  }

  set currentPassword(password:string){
    this._currentPassword = password;    
  }

  private _newPassword:string;

  get newPassword():string{
    return this._newPassword;
  }

  set newPassword(password:string){
    this._newPassword = password;
  }

  private _passwordConfirmation:string;

  get passwordConfirmation():string{
    return this._passwordConfirmation;
  }

  set passwordConfirmation(password:string){
    this._passwordConfirmation = password;
  }

  get user():User{
    return this._user;
  }

  get isNew():boolean{
    return this._isNew;
  }

  constructor (
    @Inject("article") private _articleService:ArticleService, 
    @Inject("user") private _userService:UserService,
    private _session:Session, 
    private _modalCtrl:ModalController,
    private _alertCtrl:AlertController,
    private _navCtrl:NavController,
    private _toastCtrl:ToastController ) 
  { 
    this._user = this._session.user;
  }

  public removeSource(id:string){
    let sourceIndex:number = this._user.sources.findIndex(source => source.id == id);
    this._user.sources.splice(sourceIndex, 1);
  }

  public async editSourceList(){
    
    let sourcesModal:HTMLIonModalElement = await this._modalCtrl.create({
      component: SourcesModalPage,
      componentProps: { 'sources': this._user.sources }
    });

    sourcesModal.present();
    
    let modalReponse:OverlayEventDetail = await sourcesModal.onDidDismiss();
    let selectedArticles:ArticleSource[] = modalReponse.data;
    this._user.sources = selectedArticles;
  }

  public async register(){
    
    let registeredUser:User;
    
    try{
      
      await this._validatePassword();
      this._user.login.password = this._newPassword;

    }catch(ex){
      
      await this._errorHandler(ex);

      return;
    }

    try{
      registeredUser = await this._userService.register(this._user);
    }catch(ex){
      
      await this._errorHandler(ex);

      return;
    }
    
    
    this._session.user = registeredUser;

    let alert:HTMLIonAlertElement = await this._alertCtrl.create({
      header: 'Seccess',
      message: 'Your account has been created, you can see the news right now',
      buttons: [{
        text: 'OK',
        handler:() => {
          this._navCtrl.navigateForward('report');
        }
      }]
    });

    alert.present();
  }

  public async update(){
    
    let currentPassword = this._user.login.password;

    try{
      await this._validatePassword(currentPassword);
      if(this.newPassword) {
        this._user.login.password = this.newPassword;
      }
    }catch(ex){
      
      await this._errorHandler(ex);

      return;
    }
    

    await this._userService.update(this._user);

    let alert:HTMLIonAlertElement = await this._alertCtrl.create({
      header: 'Seccess',
      message: 'Your account has been updated, you can see the news right now',
      buttons: [{
        text: 'OK',
        handler:() => {
          this._navCtrl.navigateForward('report');
        }
      }]
    });

    alert.present();
  }

  private async _validatePassword(currentPassword:string = null){
    
    //NADA FOI MODIFICADO, NÃO PRECISA DE VALIDAÇÃO
    if(!this._currentPassword && !this._newPassword && !this._passwordConfirmation)
    {
      return;
    }
    
    //XOR OU A SENHA NOVA NÃO FOI INFORMADA
    //OU A CONFIRMAÇÃO DA SENHA NÃO FOI INFORMADA
    //SE NENHUM DOS DOIS INFORMADO, NÃO HÁ ATUALIZAÇÃO, NÃO HÁ ERRO
    if( ( this._newPassword && !this._passwordConfirmation ) 
    || ( !this._newPassword && this._passwordConfirmation ) ) {
      throw new InvalidPasswordExcpetion("The new password and the confirmation are both required");
    }
    
    //CASO SEJA NÃO SEJA UM REGISTRO NOVO, 
    //A SENHA DEVE ATUAL DEVE SER A MESMA OBITDA DA BASE DE DADOS
    if(!this._isNew){
      
      //EXISTE ATUALIZAÇÃO DE SENHA, MAS NÃO FOI INFORMADA A SENHA ATUAL
      if((this._newPassword || this._passwordConfirmation) && !this._currentPassword){
        throw new InvalidPasswordExcpetion("Is required inform the previous password");
      }
      
      if(currentPassword != this._currentPassword){
        throw new InvalidPasswordExcpetion("The previous password informated is incorrect");
      }

    }

    //A SENHA DEVE SER IGUAL A SUA VALIDAÇÃO
    if(this._newPassword != this._passwordConfirmation){
      throw new InvalidPasswordExcpetion("The new password informed is not equal to confirmation");
    }
  }
  
  ionViewWillEnter(){
    this._setUserLogged();
  }

  ngOnInit() { 
    this._setUserLogged();    
  }

  private _setUserLogged() {
    if (this._session.isLogged) {
      this._user = this._session.user;
      this._isNew = false;
    }
    else {
      this._user = new User();
      this._isNew = true;
    }
  }

  private async _errorHandler(ex)
  {
    let toast:HTMLIonToastElement;

      if(ex instanceof InvalidPasswordExcpetion || ex instanceof RegisterException){
        toast = await this._toastCtrl.create({
          message: ex.message,
          duration: 3600,
          position: 'top'
        });
      }else{
        toast = await this._toastCtrl.create({
          message:'unknow error',
          duration: 3600,
          position: 'top'
        });
      }

      toast.present();
  }
}
