import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {
  myFN:string;

  constructor(private storage: Storage, public navCtrl: NavController) {
  }

  saveFN(){
    console.log(this.myFN);
    this.storage.set("FN", this.myFN);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
  }

  ionViewWillEnter(){
    this.storage.get("FN")
    .then((data)=>{
      this.myFN = data;
    })
    .catch((err) =>{
    console.log("Database retrieval error")
  })
  }
  

}
