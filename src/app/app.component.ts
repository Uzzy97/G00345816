import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { AccessoriesPage } from '../pages/accessories/accessories';
import { PhonesPage } from '../pages/phones/phones';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { LocationPage } from '../pages/location/location';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  

  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private faio: FingerprintAIO) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', //Only necessary for Android
      disableBackup:true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
  })
  .then((result: any) => console.log(result))
  .catch((error: any) => console.log(error));
    
    
  }
  
  ionViewDidEnter(){
  }



  

  
  
}

