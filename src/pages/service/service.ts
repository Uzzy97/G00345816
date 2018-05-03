import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
  currentImage=null;

  constructor(public navCtrl: NavController, private camera: Camera, private emailComposer: EmailComposer) {
  }
  captureImage(){
    const options: CameraOptions={
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    }


    this.camera.getPicture(options).then(imageData=>{
      this.currentImage = imageData;
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
      subject: 'Customer Queries'
    };

    this.emailComposer.open(email);
  }
  
  
    

}
