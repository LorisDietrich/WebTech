import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = []
  prodSubject = new Subject<Product[]>();

  constructor(private http: HttpClient) {
    //this.getProductsFromServer();
   }

  emitProducts(){
    this.prodSubject.next(this.products);
  }

  getItems() {
    return this.http.get<{}[]>
    ("http://localhost:3000" + "/item");
  }

  getItemsObservable():Observable<{}[]> {
    return this.http.get<{}[]>("http://localhost:3000" + "/item");
  }

  getProductsFromServer(){
    const url = 'localhost:3000/item';
    // ${environment.API_URL+'products?'+environment.API_Key}

    this.http.get(url).subscribe(
      (dataProducts: Result)=>{
        if(dataProducts.status == 200){
          this.products = dataProducts.result;
          this.emitProducts();
        }else{
          console.log("Error: " + dataProducts.message)
        }
      }
    )
  }
}
