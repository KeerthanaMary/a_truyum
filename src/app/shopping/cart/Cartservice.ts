import { Injectable, Output, EventEmitter } from "@angular/core";
import { Cart_I } from './Cart_I';
import { FoodService } from 'src/app/Food/food_service';
import { Food_Interface } from 'src/app/Food/item_info/food-item-info/food_item_In';





@Injectable({
    providedIn:'root'
})
export class CartService
{
    constructor(private foodService:FoodService){}
    fooditemlist:Food_Interface[] = this.foodService.Getfooditems()
   cart:Cart_I = {CartItems:[],totalPrice:0}
   @Output() cartUpdated=new EventEmitter()
   getcartitems()
   {
       return this.cart.CartItems;
   }
   calculatetotal()
   {
       let totalValue:number = 0
       for(let item of this.cart.CartItems){
           totalValue = totalValue + item.price
       }
       this.cart.totalPrice = totalValue
       return this.cart.totalPrice
   }
   addtocart(itemid:number)
   {
       if(itemid>0)
       {
            console.log(itemid)
       this.cart.CartItems.push(this.foodService.getFoodItem(itemid))
       }
      else{
          console.log(itemid);
      }
       this.calculatetotal()
   }
   deletefromcart(itemdeleteId:number)
   {
       this.cart.CartItems.splice(this.cart.CartItems.findIndex(item => item.id==itemdeleteId),1)
   }
   clearCart()
  {
    this.cart = {CartItems:[],totalPrice:0}
  }
}