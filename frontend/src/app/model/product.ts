import { NoopAnimationPlayer } from "@angular/animations";

export interface Product {
  id_item: number;
  name: string;
  stock: number;
  price: number;
  release_date: Date;
  category: number;
  description: string;
  category_text: Text;
}

/*
export interface Product {
  idProduct: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: number;
}
*/
