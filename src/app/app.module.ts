import { OnePage } from './../pages/one/one';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NotedetailPage } from './../pages/notedetail/notedetail';
import { AbsencePage } from './../pages/absence/absence';
import { NotesPage } from './../pages/notes/notes';
import { PitemPage } from './../pages/pitem/pitem';
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EtudiantProvider } from '../providers/etudiant/etudiant';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActualitesProvider } from '../providers/actualites/actualites';
import { NotesProvider } from '../providers/notes/notes';
import { Calendar } from '@ionic-native/calendar';
import { IonicStorageModule } from '@ionic/storage';
import { AbsetudiantProvider } from '../providers/absetudiant/absetudiant';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    PitemPage,
    NotesPage,
    AbsencePage,
    NotedetailPage,
    OnePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoundProgressModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    PitemPage,
    NotesPage,
    AbsencePage,
    NotedetailPage,
    OnePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar,
    EtudiantProvider,
    AuthserviceProvider,
    ActualitesProvider,
    NotesProvider,
    AbsetudiantProvider,
    
  ]
})
export class AppModule {}
