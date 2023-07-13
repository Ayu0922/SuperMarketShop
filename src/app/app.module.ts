import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { FoodVegetablesComponent } from './food-vegetables/food-vegetables.component';
import { FilterPipe } from './shared/filter.pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
// import { NgvBootstrapModule } from 'ngx-bootstrap/ngv-bootstrap';
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
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { AddnewComponent } from './addnew/addnew.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    HomeComponent,
    SalesComponent,
    ServiceComponent,
    FooterComponent,
    FoodVegetablesComponent,
    CartComponent,
         AddProductComponent,
         FilterPipe,
         AddFoodVegiesComponent,
         AddFruitsComponent,
         BekaryProductComponent,
         AddBunCakeComponent,
         AddGrainsComponent,
         FoodGrainsComponent,
         LoginComponent,
         WishlistComponent,
         BuyNowComponent,
         BuySignUpComponent,
         LandingPageComponent,
         UserHeaderComponent,
         UserHomepageComponent,
         AddnewComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    // Ng2SearchPipeModule,
    FormsModule,
    NgxOtpInputModule, 
    // OrderModule,
    // Ng2OrderModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
