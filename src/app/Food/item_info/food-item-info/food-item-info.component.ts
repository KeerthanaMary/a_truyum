import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food_Interface } from './food_item_In';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/site/auth.service';

@Component({
  selector: 'app-food-item-info',
  templateUrl: './food-item-info.component.html',
  styleUrls: ['./food-item-info.component.css']
})
export class FoodItemInfoComponent implements OnInit {
  Isadmin:boolean=true
  constructor(private router:Router,private authService:AuthService) {

   }

  ngOnInit() {
  }
@Input('food_item') fooditem:Food_Interface;
@Output() addToCartRequest: EventEmitter<number>=new  EventEmitter<number>()
onAddToCart(itemId:number){
  this.addToCartRequest.emit(itemId)
}
onEdit(itemId:number)
{
  this.router.navigateByUrl('/edit/'+itemId)
}

isAdminUser()
{
  return this.authService.isAdmin
}


}
