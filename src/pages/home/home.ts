import { EtudiantProvider } from './../../providers/etudiant/etudiant';
import { AuthserviceProvider } from './../../providers/authservice/authservice';
import { ListPage } from './../list/list';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, MenuController, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthserviceProvider,EtudiantProvider]

})
export class HomePage {
  loginForm = {
    email: '',
    password: ''
  };
  
  alertMessage = '';
  constructor(public navCtrl: NavController,private storage: Storage,public menu: MenuController, public authService: AuthserviceProvider) {

  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise 
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
   }
   goRegister(){
    this.navCtrl.push(RegisterPage);}
    login(){
      this.authService.authEtudiant(this.loginForm).subscribe(data => {
        if(data.success){
          this.navCtrl.push(ListPage);
          this.storage.set('id',JSON.stringify(data.id));
          this.storage.set('token',JSON.stringify(data.token));
          this.storage.get('id').then((val) => {
            console.log('Your id is', val);
          });
          
          
        }else {
          this.alertMessage = 'Wrong login informations';
        }
      })
    }

}
