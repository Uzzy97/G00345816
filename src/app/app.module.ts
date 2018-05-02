import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationPage } from '../pages/location/location';
import { PhonesPage } from '../pages/phones/phones';
import { AccessoriesPage } from '../pages/accessories/accessories';
import { ServicePage } from '../pages/service/service';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';
import { FeedbackPage } from '../pages/feedback/feedback';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PhonesPage,
    AccessoriesPage,
    ServicePage,
    LocationPage,
    FeedbackPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PhonesPage,
    AccessoriesPage,
    ServicePage,
    LocationPage,
    FeedbackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}



