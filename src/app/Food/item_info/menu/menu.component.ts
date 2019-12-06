import { Component, OnInit, Input } from '@angular/core';
import { Food_Interface } from '../food-item-info/food_item_In';
import { FoodService } from '../../food_service';
import { CartService } from 'src/app/shopping/cart/Cartservice';
import { AuthService } from 'src/app/site/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  foodItemList:Food_Interface[]
  filteredFoodItemList:Food_Interface[]
  
  constructor(private foodService: FoodService, private cartService:CartService, private authService:AuthService, private router:Router) { }
  
  ngOnInit() {
    this.foodItemList = this.foodService.Getfooditems()
    this.filteredFoodItemList = this.foodItemList
    this.foodService.getFoodFilter().subscribe(
      (name:string) => {
        if(name!='')
          this.filteredFoodItemList = this.foodService.getFilteredFoodItems(name,this.foodItemList) 
        else if(name=='')
          this.filteredFoodItemList = this.foodItemList
      }
    )
  }

  addToCart(itemId:number){
    if(!this.authService.loggedInUser)
    {
      this.router.navigateByUrl('/cart')
    }
    this.cartService.addtocart(itemId)
  }
}
