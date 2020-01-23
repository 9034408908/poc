import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-producr',
  templateUrl: './producr.component.html',
  styleUrls: ['./producr.component.css']
})
export class ProducrComponent implements OnInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  
  lat = 40.73061;
  lng = -73.935242;
  
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }
  constructor() { }

  ngOnInit() {
  //    const mapProperties = {
  //       center: new google.maps.LatLng(35.2271, -80.8431),
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //  };
  //  this.map = new google.maps.Map(this.gmap.nativeElement,    mapProperties);
   }

}