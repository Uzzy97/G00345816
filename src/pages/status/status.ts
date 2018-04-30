import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  myStatus:string;

  constructor(private storage: Storage, public navCtrl: NavController) {
  }
  saveStatus(){
    console.log(this.myStatus);
    this.storage.set("Status", this.myStatus);
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    this.storage.get("Status")
    .then((data)=>{
      this.myStatus = data;
    })
    .catch((err) =>{
    console.log("Database retrieval error")
  })
  }
  }
  