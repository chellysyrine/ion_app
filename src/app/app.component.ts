import { OnePage } from './../pages/one/one';
import { ActualitesProvider } from './../providers/actualites/actualites';
import { AbsencePage } from './../pages/absence/absence';
import { NotesPage } from './../pages/notes/notes';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon :string}>;

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public actService:ActualitesProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      
      { title: 'Actualites', component: ListPage, icon:"images" },
      { title : 'Notes infos', component : NotesPage, icon:"list"},
      { title : 'Absence', component: AbsencePage, icon:"school" },
      { title: 'Deconnexion', component: HomePage, icon :"home" },
      { title: 'one', component: OnePage, icon :"home" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}