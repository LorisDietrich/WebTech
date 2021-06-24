import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products = [];
  @Input() isPaginated: boolean = true;
  prodSub: Subscription;
  prefUrlImage = `${environment.prefUrlImage}`
  fin = `${environment.fin}`
  public d = new Date().toDateString()
  public m = new Date(this.d).toISOString()
  finalDate = "2021-05-02T22:00:00.000Z";
  public toogleWeek: boolean = true;
  currentPage = 0;
  pages = [0, 1, 2]

  constructor(private prodService:ProductsService, private cartService: CartService) {
  }

  ngOnInit(): void {

  }

  addToCart(product: Product) : void {
    this.cartService.addProductToCard(product);
  }

  deleteFromCard(product: Product) : void {
    this.cartService.deleteFromCard(product);
  }

  changePage(numberPage: number): void{
    const prod = this.prodService.getProductbyPage(numberPage);
    if(prod){
      this.products = prod;
      this.currentPage = numberPage;
    }
  }

  nextPage(): void{
    const newCurrentPage = this.currentPage+1
    const prod = this.prodService.getProductbyPage(newCurrentPage);
    if(prod){
      this.products = prod
      this.currentPage = newCurrentPage
    }
  }

  prevPage(): void{
    const newCurrentPage = this.currentPage-1
    const prod = this.prodService.getProductbyPage(newCurrentPage);
    if(prod){
      this.products = prod
      this.currentPage = newCurrentPage
    }
  }
}
