import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyDEBQyeuBXb7WNwW6zn5zjzS3byxp_4zgM",
      authDomain: "huddle-42772.firebaseapp.com",
      databaseURL: "https://huddle-42772.firebaseio.com",
      projectId: "huddle-42772",
      storageBucket: "huddle-42772.appspot.com",
      messagingSenderId: "892671675787"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

