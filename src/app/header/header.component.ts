import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
