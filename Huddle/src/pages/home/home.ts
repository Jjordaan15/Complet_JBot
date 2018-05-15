import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {DriverOppPage} from "../driver-opp/driver-opp";
import {PassangerRequestPage} from "../passanger-request/passanger-request";
import * as firebase from "firebase";
import {PassangerRequestActivePage} from "../passanger-request-active/passanger-request-active";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newItem = '';
  shoppingItems;
  state;


  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {

  }

  async GoToDriverOpp(){

    await this.firebaseProvider.checkReq("Opportunity").then(data => {
      console.log(data);
      if ((data) == "T") {
        this.navCtrl.setRoot('OpporunityActivePage');
        console.log("True");
      } else if ((data) == "F"){
        console.log("False");
        this.navCtrl.setRoot('DriverOppPage');
      }
    })

  }

  async GoToRequest(){

    await this.firebaseProvider.checkReq("Request").then(data => {
      console.log(data);
      if ((data) == "T") {
        this.navCtrl.setRoot('PassangerRequestActivePage');
        console.log("True");
      } else if ((data) == "F"){
        console.log("False");
        this.navCtrl.setRoot('PassangerRequestPage');
      }
    })

  }



}
