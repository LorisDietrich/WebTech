import { NoopAnimationPlayer } from "@angular/animations";

export interface Product {
  idProduct: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: number;
}
