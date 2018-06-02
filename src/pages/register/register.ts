import { HomePage } from './../home/home';
import { ListPage } from './../list/list';
import { EtudiantProvider } from './../../providers/etudiant/etudiant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  isValid = 0;
  alertMessage = '';
  registerForm ={
    email:'',
   
    cin:'',
   
  };
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public registerService:EtudiantProvider) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  register() {
this.registerService.verifEtudiants(this.registerForm).subscribe(data =>{
console.log(data);
if(data.success){
  
    let prompt = this.alertCtrl.create({
      title: 'Mot de passe ',
      message: "Créér votre mot de passe ",
      inputs: [
        {
          type: 'password',
          name: 'password',
          placeholder: 'mot de passe'
        },
      ],
      buttons: [
        {
          text: 'Quitter',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enregistrer',
          handler: data => {
            this.navCtrl.push(HomePage);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  else {
    let alert = this.alertCtrl.create({
      title: 'Erreur',
      subTitle: 'Vous n étes pas un etudiant de cette universite',
      buttons: ['OK']
    });
    alert.present();
  }
  

}
)




}

}





    /*
    let keys = Object.keys(this.registerForm);
    this.isValid = 0;
    let invalid = [];
    keys.forEach(key => {
      if(this.registerForm[key].length > 0) {
        this.isValid ++;
      } else {
        invalid.push(key);
      }
    });
    if (this.isValid === keys.length) {
      this.registerService.addEtudiant(this.registerForm).subscribe(data => {
        if(data[0]){
          this.navCtrl.push(HomePage);
        }else {
          this.alertMessage = '';
        }
  
       })
    }else {
      
      invalid.forEach(labels => {
        this.alertMessage = this.alertMessage + ',' + labels
      })
      let alert = this.alertCtrl.create({
        title: 'attention ',
        subTitle: 'make sure that you have filled' +this.alertMessage,
        buttons: ['OK']
      });
      alert.present();
    }*/
 
