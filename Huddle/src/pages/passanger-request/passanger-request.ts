import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";

/**
 * Generated class for the PassangerRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passanger-request',
  templateUrl: 'passanger-request.html',
})
export class PassangerRequestPage {

  myEmail;
  predict;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.predict = this.firebaseProvider.predictList();
    this.myEmail = 'Steph@Gmail';
  }


  CreateRequest(Dfrom,Dtoo,myDate,myTime,offer) {
    console.log("From: " + Dfrom + " Too: " + Dtoo + " Date: " + myDate + " Time: " + myTime);
    this.firebaseProvider.CreateReq(Dfrom,Dtoo,myDate,myTime,offer,this.myEmail);
    this.navCtrl.setRoot('PassangerRequestActivePage');
  }

}
