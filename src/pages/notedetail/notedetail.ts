import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notedetail',
  templateUrl: 'notedetail.html',
})
export class NotedetailPage {
item : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotedetailPage');
  }

}
