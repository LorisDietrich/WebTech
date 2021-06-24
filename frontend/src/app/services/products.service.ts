import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, Subject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  prodSubject = new Subject<any[]>();
  numberOfProductPage = 6;

  constructor(private http: HttpClient) {
    this.getProductsFromServer();
  }

  emitProducts(){
    this.prodSubject.next(this.products);
  }
/*
  getItems() {
    return this.http.get<Product[]>
    ("http://localhost:3000" + "/item");
  }


  getItemsObservable():Observable<{}[]> {
    return this.http.get<{}[]>("http://localhost:3000" + "/item");
  }
*/
  getProductsFromServer(){
    const url = `${environment.URLNODEJS}`
    // `${environment.API_URL+'products?'+environment.API_Key}`

    this.http.get<Product[]>(url).subscribe(
      (dataProducts)=>{ //: Result
        /*
        if (dataProducts.status == 200){
          this.products = dataProducts.result;
          this.emitProducts();
        }
        else
        {
          console.log("Error : " + dataProducts.message); //HERE -- ALL CARACTERISTIC OF RESULT ARE UNDEFINED
          */
        console.log(typeof(dataProducts))
        this.products = dataProducts;
        this.emitProducts();
        //console.log(this.products[1].id_item)
        //console.log(this.products)
        //console.log(Array.isArray(this.products))
        //console.log(this.getproduct())
        this.products = <Product[]>this.products
        //console.log(this.products.find(element => element.id_item == 20)) //error here undefined
        //console.log(this.products.find(element => element.stock == 23))

        //}
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  getproduct(){
    return this.products
  }

  getProductById(id: number): Product {

    const url = `${environment.URLNODEJS}`

    //console.log("--> " + this.getproduct())
    const product = this.products.find(element => element.id_item == id);

    if (product){
      return product;
    }
    return null;
  }

  getProductbyPage(numberPage: number): Product[]{
    const lenProduct = this.products.length/this.numberOfProductPage;
    if(numberPage > 0 || numberPage < lenProduct){
      const prodResult = this.products.slice(numberPage*this.numberOfProductPage, (numberPage+1)*this.numberOfProductPage);
      return prodResult;
    }
    return null
  }
}
