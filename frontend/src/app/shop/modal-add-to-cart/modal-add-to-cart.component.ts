import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-add-to-cart',
  templateUrl: './modal-add-to-cart.component.html',
  styleUrls: ['./modal-add-to-cart.component.css']
})
export class ModalAddToCartComponent implements OnInit {

  @Input() products = [];
  prefUrlImage = `${environment.prefUrlImage}`;
  fin = `${environment.fin}`;

  constructor() { }

  ngOnInit(): void {
  }

}
