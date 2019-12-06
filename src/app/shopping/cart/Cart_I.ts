import { Food_Interface } from 'src/app/Food/item_info/food-item-info/food_item_In';

export interface Cart_I
{
   
   CartItems:Food_Interface[];
   totalPrice:number;
  
}