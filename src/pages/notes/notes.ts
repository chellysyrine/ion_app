import { NotedetailPage } from './../notedetail/notedetail';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { NotesProvider } from '../../providers/notes/notes';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
  providers:[NotesProvider]
})
export class NotesPage implements OnInit {

  items: Array<any>;

  constructor(public navCtrl: NavController, public noteService:NotesProvider,public navParams: NavParams, public modalCtrl: ModalController) {

  }
  ngOnInit(){
    this.noteService.getNotes().subscribe(data => {
      this.items = data.data;
      //this.items = Array.of(this.items); 
      console.log(data)
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }
  noteDetails(item){
    this.navCtrl.push(NotedetailPage, {item: item});
  }

}
