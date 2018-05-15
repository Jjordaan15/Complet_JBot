import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  public ListRef: firebase.database.Reference;
  public ListRef2: firebase.database.Reference;
  myList;
  email;

  constructor() {
    this.ListRef = firebase.database().ref("chat/");
    this.email = "Steph@Gmail"
  }

  CreateOpp(Dfrom,Dtoo,myDate,myTime,email) {
    this.ListRef = firebase.database().ref("DriverOpp/").child(email);
    this.ListRef.set({
      From: Dfrom,
      Too: Dtoo,
      Date: myDate,
      Time: myTime,
      Driver: email,
      State: "P"
    });

    this.ListRef2 = firebase.database().ref("Users/" + email + '/').child("Opportunity");
    this.ListRef2.set({
      State: "T"
    });
  }

  CreateReq(Dfrom,Dtoo,myDate,myTime,offer,email) {
    this.ListRef = firebase.database().ref("PassReq/").child(email);
    this.ListRef.set({
      From: Dfrom,
      Too: Dtoo,
      Date: myDate,
      Time: myTime,
      Offer: offer,
      Passenger: email,
      State: "P"
    });

    this.ListRef2 = firebase.database().ref("Users/" + email + '/').child("Request");
    this.ListRef2.set({
      State: "T"
    });

  }

  async  checkReq(option){
    let state = '';
    return await firebase.database().ref("Users/"+this.email+"/"+option+"/").once('value', snap => {
      state = snap.val().State;
      console.log(state);
      return state;
    }).then(value => {return state});
  }

  async readme(myList,options) {
    await firebase.database().ref((options) + "/" + this.email + "/").once('value', snap => {
      myList.push({
        From: snap.val().From,
        Too: snap.val().Too,
        Date: snap.val().Date,
        Time: snap.val().Time,
        Offer: snap.val().Offer
      });
    });
    console.log(myList);
    return (myList);
  }

  predictList(){
    return (["Stellenbosh", "Stellenbosh-BP", "Stellenbosh-DieBoord", "Stellenbosh-Central", "Stellenbosh-Eikestad", "Somerset West", "Somerset-Mall"]);
  }

}
