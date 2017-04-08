import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { Post } from "../pages/post/post";
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data';
import { AngularFireModule } from 'angularfire2';
import { Connection } from '../components/connection/connection';


 var config = {
    apiKey: "AIzaSyAc2H6h1VZ8i7KBaqX7y1g5LZjfMiKJT6o",
    authDomain: "feed-3fe63.firebaseapp.com",
    databaseURL: "https://feed-3fe63.firebaseio.com",
    projectId: "feed-3fe63",
    storageBucket: "feed-3fe63.appspot.com",
    messagingSenderId: "483640610481"
  };
  

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Post,
    TabsPage,
    Connection
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    Post,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
