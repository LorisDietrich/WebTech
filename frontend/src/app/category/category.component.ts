import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  products: Product[];
  productSub: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (resquest)=> {
        console.log(resquest.id);
        this.productSub = this.productService.prodSubject.subscribe(
          (data : Product[])=>{
            const prod = data.filter(product => {
              return product.category == +resquest.id
            });
            //console.log(prod);
            this.products = prod
          }
        );
        this.productService.emitProducts();
      }
    )
  }

  ngOnDestroy(): void{
    this.productSub.unsubscribe();
  }

}
