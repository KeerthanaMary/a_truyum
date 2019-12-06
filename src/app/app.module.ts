import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FoodItemInfoComponent } from './Food/item_info/food-item-info/food-item-info.component';
import { MenuComponent } from './Food/item_info/menu/menu.component';
import { SearchComponent } from './Food/search/search.component';
import { CartComponent } from './shopping/cart/cart.component';
import { RouterModule } from '@angular/router';
import { FoodItemEditComponent } from './Food/item-edit/food-item-edit/food-item-edit.component';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { HeaderComponent } from './site/header/header.component';
import { FooterComponent } from './site/footer/footer.component';
import { HomeComponent } from './site/home/home.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  
  
    FoodItemInfoComponent,
    MenuComponent,
    SearchComponent,
    CartComponent,
    FoodItemEditComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'menu',component:MenuComponent},
      {path:'cart',component:CartComponent},
      {path:'edit/:id',component:FoodItemEditComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent}
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
