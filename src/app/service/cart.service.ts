import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList :any=[]
  public cartWishList :any=[]
  public productList = new BehaviorSubject<any>([]);
  public wishList = new BehaviorSubject<any>([]);
  public search =new BehaviorSubject<string>(""); //act as both Observable & Emitteer
  
  constructor() { }

  getProduct(){
    return this.productList.asObservable();
    
  }
  getWList(){
    return this.wishList.asObservable();
    
  }
  setProduct(product:any){
 this.cartItemList.push(...product);
 this.productList.next(product);
  }

  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  addToWishlist(item:any){
    this.cartWishList .push(item);
    this.wishList.next(this.cartWishList );
    this.getTotalPrice();
    console.log(this.cartWishList )
  }

  getTotalPrice() :number{
    let grandTotal=0;
  
    this.cartItemList.map((a:any)=>{
      grandTotal += (a.total*a.qty);  
    })
    return grandTotal;
    
  }


  remaoveCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);

  }
  remaoveWishListItem(product:any){
    this.cartWishList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartWishList.splice(index,1);
      }
    })
    this.wishList.next(this.cartWishList);

  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }
  removeAllList(){
    this.cartWishList=[]
    this.wishList.next(this.cartWishList);
  }
}
