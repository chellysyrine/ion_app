import { FileTransfer } from '@ionic-native/file-transfer';
import { File} from '@ionic-native/file';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-one',
  templateUrl: 'one.html',
})
export class OnePage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private document:DocumentViewer, private file: File,private transfer:FileTransfer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnePage');
  }
  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/Rapport-1.pdf', 'application/pdf', options);
  }
 
  downloadAndOpenPdf() {
    let path = null;
 
    const transfer = this.transfer.create();
    transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf', path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    });
  }
}


