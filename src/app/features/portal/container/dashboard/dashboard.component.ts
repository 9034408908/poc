import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {}
  
   ngAfterViewInit() {
    this.mapInitializer();
  }
  mapInitializer() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.gmap.nativeElement, mapProperties);
  }
}
