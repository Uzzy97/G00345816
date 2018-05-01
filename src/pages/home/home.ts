import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { PhonesPage } from './../phones/phones';
import { SignUpPage } from './../sign-up/sign-up';
import { LocationPage } from './../location/location';
import { AccessoriesPage } from '../accessories/accessories';
import {EmailComposer} from '@ionic-native/email-composer';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { FeedbackPage } from '../feedback/feedback';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentImage = null;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private camera: Camera, private emailComposer: EmailComposer) {

  }

  captureImage(){
    const options: CameraOptions ={
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    }

    this.camera.getPicture(options).then(ImageData =>{
      this.currentImage = ImageData;
    }, err =>{
      console.log('Image error: ', err);

    });

  }

  sendEmail(){
    let email = {
      to: 'saftechfonez@gmail.com',
      attachments:[
        this.currentImage
      ],
      subject: 'My Cool Image',
      body: 'Hey Check Out This'


    };

    this.emailComposer.open(email);

  }


  phoneList() {
    this.navCtrl.push(PhonesPage);
  }
  accessoriesList() {
    this.navCtrl.push(AccessoriesPage);
  }

  signUp(){
    this.navCtrl.push(SignUpPage);
  }
  location(){
    this.navCtrl.push(LocationPage);
  }
  services(){
    this.navCtrl.push(SignUpPage);
  }

  feedback(){
    this.navCtrl.push(FeedbackPage);
  }
}
