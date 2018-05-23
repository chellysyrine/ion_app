import { ActualitesProvider } from './../../providers/actualites/actualites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pitem',
  templateUrl: 'pitem.html',
  providers :[ActualitesProvider]
})
export class PitemPage {
 item:any;
  constructor(public navCtrl: NavController,public actualService: ActualitesProvider, public navParams: NavParams) {
    this.item=navParams.data.item;
  }

ionViewWillEnter	( ) {
    
    
    
  }
  

  }



