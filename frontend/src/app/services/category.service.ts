import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];
  categorySubject = new Subject<Category[]>();

  constructor(private http: HttpClient) {
    this.getCategoryFromServer();
  }

  emitCategories(): void{
    this.categorySubject.next(this.categories);
  }

  getCategoryFromServer(): void {
    const url = "http://localhost:3000/category"
    this.http.get<Category[]>(url).subscribe(
      (response)=> {
        this.categories = response
        this.emitCategories();
      }
    )
  }


}
