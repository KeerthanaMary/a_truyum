import { Component, OnInit } from '@angular/core';
import { CartService } from './Cartservice';
import { Cart_I } from './Cart_I';
import { Food_Interface } from 'src/app/Food/item_info/food-item-info/food_item_In';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartservice:CartService) { }
cartitems:Food_Interface[]
total:number;
  ngOnInit() {

    this.cartitems=this.cartservice.getcartitems();
    this.total=this.cartservice.calculatetotal();
  }
onRemoveItem(itemid:number)
{
  this.cartservice.deletefromcart(itemid);
  this.total=this.cartservice.calculatetotal();
}
}
