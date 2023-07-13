import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  searchText:any;
  public totalItem : number = 0;
  public totalList : number = 0;
  search(event:any){
    this.searchText =(event.target as HTMLInputElement).value;
    console.log(this.searchText);
    this.cartService.search.next(this.searchText);
  }
  
  
  
    constructor(private cartService :CartService) { }
  
    ngOnInit(): void {
      this.cartService.getProduct()
      .subscribe(res=>{
        this.totalItem =res.length;
      })
      this.cartService.getWList()
      .subscribe(res=>{
        this.totalList =res.length;
      })
    }
}
