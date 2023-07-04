import { Component,OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public product :any =[];
  public grandTotal !: number ;
  public total!:number;
  public discountPercentage!:10;
  getCartDetails:any=[];
  constructor(private cartService :CartService,private api:ApiService) { }
  
    ngOnInit(): void {
      this.loadCart();
      this.getDiscount();
     
      this.cartService.getProduct()
      .subscribe(res=>{
        this.product =res;
        this.grandTotal =this.cartService.getTotalPrice()
        console.log("GrandTotal :"+this.grandTotal);
        // console.log("product :"+this.product);
        
      })

    }
    getDiscount() {
      if (this.discountPercentage > 0) {
        return this.grandTotal-( this.grandTotal * this.discountPercentage / 100);
      } else {
        return 0;
      }
    }
    removeItem(item:any){
  this.cartService.remaoveCartItem(item);
    }
    emptycart(){
      this.cartService.removeAllCart();
    }
   //increase & decrease product 
   inc(item:any){
    console.log(item);
    if(item.qty !=5){
      item.qty += 1;
      this.grandTotal = this.cartService.getTotalPrice()
    }
   
  }
  dec(item:any){
    console.log("remove one item from cart :"+item);
    if(item.qty !=1){
      item.qty -= 1;
      this.grandTotal = this.cartService.getTotalPrice()
    }
 
  }
//grand total
  loadCart(){
if(localStorage.getItem('localCart')){
  // this.getCartDetails=JSON.parse(localStorage.getItem('localCart'))
  this.total=this.getCartDetails.reduce(function(_acc: any,_val: any){
    return _acc +(_val.price*_val.qty);
  },0);
}
  }
}
