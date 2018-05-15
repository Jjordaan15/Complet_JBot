import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";

/**
 * Generated class for the OpporunityActivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opporunity-active',
  templateUrl: 'opporunity-active.html',
})
export class OpporunityActivePage {
  mylist;
  option;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.option = "DriverOpp";
    this.mylist = [];
  }

  async ionViewDidLoad() {
    this.mylist = await this.firebaseProvider.readme(this.mylist, this.option);
    console.log(this.mylist, this.option);
  }

}
