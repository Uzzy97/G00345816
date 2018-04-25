import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  currentImage=null;
  
  constructor(private storage: Storage, public navCtrl: NavController, private camera: Camera, private emailComposer: EmailComposer) {
  }

  captureImage(){
    const options: CameraOptions={
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    }

    this.camera.getPicture(options).then(ImageData=>{
      this.captureImage = ImageData;
    }, err => {
      console.log('Image error: ', err);
    });
  }
  sendEmail(){
    let email = {
      to: 'saftechfonez@gmail.com',
      attachments: [
        this.currentImage
      ],
      subject: 'My Cool Image',
      body: 'Test'
    };

    this.emailComposer.open(email);
  }
  
  
    

}

