import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FacadeService } from 'src/app/services/FacadeService';

@Component({
  selector: 'app-producr',
  templateUrl: './producr.component.html',
  styleUrls: ['./producr.component.css']
})
export class ProducrComponent implements OnInit {
  public Product:any={};
  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
   }
   public submit() {
    this.facadeService.Pross.getProduct(this.Product).subscribe(res=>{
      this.Product=res;
    })
      }
}