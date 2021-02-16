import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product = new Product()
  @Output() addWishList = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addToWishlist(code:string){
    this.addWishList.emit(code);
  }

}
