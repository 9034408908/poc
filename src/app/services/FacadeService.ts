import { Injectable, Injector } from "@angular/core";
import { ProductsService } from './product.service';





@Injectable()
export class FacadeService {

  constructor(private injector: Injector) { }

  private _productsService: ProductsService;
  public get Pross(): ProductsService {
    if (!this._productsService) {
      this._productsService = this.injector.get(ProductsService);
    }
    return this._productsService;
  }

}