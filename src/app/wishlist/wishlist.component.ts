import { Component,OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  public product :any =[];
  public grandTotal !: number ;
  constructor(private cartService :CartService) { }
  
    ngOnInit(): void {
      this.cartService.getWList()
      .subscribe(res=>{
        this.product =res;
        this.grandTotal =this.cartService.getTotalPrice()
      })
    }
    removeItem(item:any){
  this.cartService. remaoveWishListItem(item);
    }
    emptycart(){
      this.cartService.removeAllList();
    }
}
