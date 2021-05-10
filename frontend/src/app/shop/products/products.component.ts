import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products;
  prefUrlImage = `${environment.prefUrlImage}`
  prodSub: Subscription;
  fin = `${environment.fin}`
  public d = new Date();
  public toogleWeek: boolean = true;
  constructor(private prodService:ProductsService) { }



  ngOnInit(): void {
   // products = this.prodService.getItems();

    this.prodService.getItems().subscribe(products => this.products = products);
   /* this.prodSub = this.prodService.prodSubject.subscribe(
      (data)=>{
        this.products = data;
      }
    );
    this.prodService.emitProducts();*/
  }

  ngOnDestroy() {
    this.prodSub.unsubscribe();
  }

}
