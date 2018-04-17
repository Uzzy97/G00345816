import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  FN:string;
  constructor(private storage: Storage, public navCtrl: NavController) {
  }
  
  openConfirmationPage(){
    this.navCtrl.push("ConfirmationPage");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  ionViewWillEnter(){
    this.storage.get("FN")
    .then((data) =>{
      this.FN = data;
    })
    .catch((err) =>{
    console.log("Database retrieval error")
  })

}


}
