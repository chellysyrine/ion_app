import { OnePage } from './../one/one';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgModule } from '@angular/core';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AbsetudiantProvider } from '../../providers/absetudiant/absetudiant';
import { Storage } from '@ionic/storage';


@NgModule({
  imports: [RoundProgressModule],
  providers: [AbsetudiantProvider]
})

@Component({
  selector: 'page-absence',
  templateUrl: 'absence.html',
})
export class AbsencePage implements OnInit {
  items: Array<any>; 
  //items: Array<any>;
  subItems = {};
  id: any;
  rate :number;
  current: number;
  current2: number;
  max: number;

  constructor(public navCtrl: NavController, public storage: Storage, public absetudiantservice: AbsetudiantProvider, public navParams: NavParams) {




  }

  ionViewDidLoad() {
    this.storage.get('id').then((val) => {
      this.absetudiantservice.getNombreabsence(val).subscribe(data => {
       
        
        this.current2 = data.data[0].nombreTotal;
       
          this.absetudiantservice.getSeanceetudiant(val).subscribe(data => {
            this.current =  this.current2;
            this.max = data.data[0].nombredeseances;
            this.rate = Math.round((this.current * 100) / this.max);
            
          })
        });

      })
  
  }

  ngOnInit() {
    this.storage.get('id').then((val) => {
      this.absetudiantservice.getabsenceEtudiant(val).subscribe(data => {
        this.items =  Object.keys(data.data);
        this.subItems = data.data;
        console.log(data.data);
        
        
       
      }) 

    });
   
    
    
      
    

  }


  /*itemmSelected( ) {
    this.storage.get('id').then((val) => {
      this.absetudiantservice.getabsenceEtudiant(val).subscribe(data => {
        this.subItems = data.data;
      })

    });
  }*/


  itemsel:number;
  itemSelected(i) {


   this.itemsel= i;
  }
}
