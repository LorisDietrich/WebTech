import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product: Product;
  prefUrlImage = `${environment.prefUrlImage}`
  sufUrlImage = `${environment.fin}`
  productSub: Subscription;

  constructor(private route: ActivatedRoute, private prodService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    var id = +this.route.snapshot.params["id"];
    this.route.paramMap.subscribe((params : ParamMap)=> {
      id = +params.get('id');
      //console.log("Id is :", id);
});
    //console.log(this.route.snapshot.params["id"])


    this.productSub = this.prodService.prodSubject.subscribe(
      (date: Product[])=>{
        this.product = this.prodService.getProductById(id);
      }
    );
    this.prodService.emitProducts();
  }

  addToCart(product: Product) : void {
    this.cartService.addProductToCard(product);
  }

}
