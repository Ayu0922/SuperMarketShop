import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-food-grains',
  templateUrl: './food-grains.component.html',
  styleUrls: ['./food-grains.component.css']
})
export class FoodGrainsComponent {
  searchText:any;
  public productList :any;
  public filterCategory : any
  public searchTerm : string ='';
  searchKey:string="";
  currentProductData: any;
title: any;
    constructor(private api :ApiService,private cartService :CartService) { }
  
    ngOnInit(): void {
      this.api.getGrains()
      .subscribe(res=>{
        this.productList =res;
        const dataString =JSON.stringify(res);
      localStorage.setItem('res', dataString);
         this.filterCategory=res;
        this.productList.forEach((a:any)=> {
          Object.assign(a,{quantity:1,total:a.price})
        });
        console.log(this.productList);
        
      });
      this.cartService.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
    }
  
    
  addtocart(item:any){
  this.cartService.addtoCart(item);
  }
  addtoWish(item:any){
    this.cartService.addToWishlist(item);
   console.log( item.qty*item.price);
   
    }
  filter(category:string){
  this.filterCategory =this.productList
  .filter((a:any)=>{
    if(a.category == category || category == ''){
      return a;
    }
  })
  }
  addtowishlist(item:any){
    this.cartService.addToWishlist(item);
    }
      //Quntity increase & decrease product 
  inc(item:any){
    console.log(item);
    if(item.qty !=5){
      item.qty += 1;
    }
   
  }
  dec(item:any){
    console.log("remove one item from cart :"+item);
    if(item.qty !=1){
      item.qty -= 1;
    }
 
  }
  search(event:any){
    this.searchTerm =(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  quickViewProduct(data:any)
  {
    this.currentProductData=data;
    console.log(this.currentProductData,'data')
  }
}
