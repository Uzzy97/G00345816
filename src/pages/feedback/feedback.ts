import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('myStore').then((data) =>{
      this.items = data;
    });
  }
  save(val){
    alert("Refresh Page To See Feedback");
    console.log('data added ' +val);
    this.storage.get('myStore').then((data) => {
      if(data !=null)
      {
        data.push(val);
        this.storage.set('myStore', data);
      }
      else
      {
        let array =[];
        array.push(val);
        this.storage.set('myStore', array);

      }

    });

  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
