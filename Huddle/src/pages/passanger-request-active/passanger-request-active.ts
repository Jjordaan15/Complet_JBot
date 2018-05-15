import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";

/**
 * Generated class for the PassangerRequestActivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passanger-request-active',
  templateUrl: 'passanger-request-active.html',
})
export class PassangerRequestActivePage {

  mylist;
  option;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.option = "PassReq";
    this.mylist = [];
  }

  async ionViewDidLoad() {
    this.mylist = await this.firebaseProvider.readme(this.mylist, this.option);
    console.log(this.mylist, this.option);
  }

}
