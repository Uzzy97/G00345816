import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { PhonesPage } from './../phones/phones';
import { ServicePage } from './../service/service';
import { LocationPage } from './../location/location';
import { AccessoriesPage } from '../accessories/accessories';
import { FeedbackPage } from '../feedback/feedback';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  phoneList() {
    this.navCtrl.push(PhonesPage);
  }
  accessoriesList() {
    this.navCtrl.push(AccessoriesPage);
  }


  location() {
    this.navCtrl.push(LocationPage);
  }
  services() {
    this.navCtrl.push(ServicePage);
  }

  feedback() {
    this.navCtrl.push(FeedbackPage);
  }
}
