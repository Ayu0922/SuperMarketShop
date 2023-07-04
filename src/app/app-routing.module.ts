import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { FoodVegetablesComponent } from './food-vegetables/food-vegetables.component';

import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddFoodVegiesComponent } from './add-food-vegies/add-food-vegies.component';
import { AddFruitsComponent } from './add-fruits/add-fruits.component';
import { BekaryProductComponent } from './bekary-product/bekary-product.component';
import { AddBunCakeComponent } from './add-bun-cake/add-bun-cake.component';
import { AddGrainsComponent } from './add-grains/add-grains.component';
import { FoodGrainsComponent } from './food-grains/food-grains.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { BuySignUpComponent } from './buy-sign-up/buy-sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'product',component:ProductComponent},
  {path:'home',component:HomeComponent},
  {path:'sales',component:SalesComponent},
  {path:'service',component:ServiceComponent},
  {path:'footer',component:FooterComponent},
  {path:'vegetables',component:FoodVegetablesComponent},
  {path:'buns',component:BekaryProductComponent},
  {path:'grain',component:FoodGrainsComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'add-vegies',component:AddFoodVegiesComponent},
  {path:'add-fruits',component:AddFruitsComponent},
  {path:'add-bun',component:AddBunCakeComponent},
  {path:'add-grains',component:AddGrainsComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'login',component:LoginComponent},
  {path:'buy',component:BuyNowComponent},
  {path:'buy-sign',component:BuySignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
