import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhonesPage } from './../phones/phones';
import { SignUpPage } from './../sign-up/sign-up';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  phoneList() {
    this.navCtrl.push(PhonesPage);
  }

  signUp(){
    this.navCtrl.push(SignUpPage);
  }


}
