import { Injectable } from "@angular/core";
import { Food_Interface } from './item_info/food-item-info/food_item_In';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class FoodService
{
    foodItemList: Food_Interface[] = [
        {id:1,name:'sandwich',price:134,category:"Main Course",active:true,delivery:true,dateoflaunch:new Date("11/11/1213"),imageurl:("https://images.unsplash.com/photo-1559466273-d95e72debaf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")},
        {id:2,name:'pancake',price:213,category:"Desert",active:true,delivery:false,dateoflaunch:new Date("12/11/2019"),imageurl:("https://images.unsplash.com/photo-1547318643-84d5cec56519?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")},
        {id:3,name:'Burger',price:214,category:"Main Course",active:false,delivery:true,dateoflaunch:new Date("11/11/2010"),imageurl:("https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")},
        {id:4,name:'Friench Fries',category:"Starter",price:34,active:true,delivery:true,dateoflaunch:new Date("11/11/2011"),imageurl:("https://images.unsplash.com/photo-1556637641-0ac7101023f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")},
        {id:5,name:'Potato Veggies',category:"Starter",price:13,active:false,delivery:true,dateoflaunch:new Date("11/11/2009"),imageurl:("https://images.unsplash.com/photo-1541809570-35dcc3a080c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")}
    ];
    Getfooditems():Food_Interface[]{
        return this.foodItemList
    }

    getFoodItem(itemId:number):Food_Interface{
        return this.foodItemList[this.foodItemList.findIndex(item => item.id == itemId)]
    }

    updateFoodItems(fooditem:Food_Interface)
    {
       let itemindex:number=this.foodItemList.findIndex(item => item.id=fooditem.id)
       this.foodItemList[itemindex]=fooditem;
    }
    getFilteredFoodItems(name: string, foodItems: Food_Interface[]): Food_Interface[]{
        if(name!=''){
          const result = foodItems.filter(item => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
          return result ? result : []
        }
      }
      foodFilter = new Subject();

  getFoodFilter():Subject<Object>{
    return this.foodFilter
  }

    
        
    
}