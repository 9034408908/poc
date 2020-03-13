import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';
import { FacadeService } from '../../../../services/FacadeService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Product:any={};

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;

  constructor(private facadeService: FacadeService) { }

  ngOnInit() {}

  public submit(data) {
this.facadeService.Pross.getProduct(this.Product).subscribe(res=>{
  this.Product=res;
  console.log('_____++++',this.Product)
})
  }
  
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
