import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";

/**
 * Generated class for the DriverOppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-opp',
  templateUrl: 'driver-opp.html',
})
export class DriverOppPage {

  myEmail;
  routList;
  items;
  predict;

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.myEmail = 'Steph@Gmail';
    this.predict = this.firebaseProvider.predictList();
  }


  // ionViewDidLoad() {
  //   this.routList = this.firebaseProvider.readme();
  //   console.log(this.routList)
  // }
  //
  // clearme(){
  //   this.test11 = [];
  //   return (this.test11)
  // }

  CreateOpportunity(Dfrom,Dtoo,myDate,myTime) {
    console.log("From: " + Dfrom + " Too: " + Dtoo + " Date: " + myDate + " Time: " + myTime);
    this.firebaseProvider.CreateOpp(Dfrom,Dtoo,myDate,myTime,this.myEmail,);
    this.navCtrl.setRoot('OpporunityActivePage');
  }

}
