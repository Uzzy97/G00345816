import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google: any;

@IonicPage()

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  @ViewChild('map') mapRef: ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
  }
  showMap(){
    //Location - lat long
    const location = new google.maps.LatLng(53.767364,-8.4907087,17);

      // Map Options
      const options = {
        center: location,
        zoom:15
      };

      const map = new google.maps.Map(this.mapRef.nativeElement,
        options);

        setTimeout(() => {
          map.setMapTypeId('roadmap');
        }, 5000);


        this.addMarker(location, map);

  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });


  }

}
