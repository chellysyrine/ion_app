import { ActualitesProvider } from './../../providers/actualites/actualites';
import { PitemPage } from './../pitem/pitem';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers :[ActualitesProvider]
})
export class ListPage implements OnInit {
  selectedItem: any;
  icons: string[];
  items: Array<any>;

  constructor(public navCtrl: NavController, public actualService: ActualitesProvider, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  ngOnInit() {
    this.actualService.getActualites().subscribe(data => {
      this.items = data.data;
      //this.items = Array.of(this.items); 
      console.log(data)
    })

  }
  itemTapped(event, id) {
    this.actualService.getActualitesbyId(id).subscribe(data => {
      console.log(data.data);
      this.selectedItem=data.data;
      this.navCtrl.push(PitemPage, {
        item: this.selectedItem
    });
    })
  
    
  }
}
