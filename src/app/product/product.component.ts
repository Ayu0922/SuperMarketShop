import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  searchText:any;
  public productList :any;
  public filterCategory : any
  searchKey:string="";
  public searchTerm : string ='';
title: any;
id:number=1;
count=1
counter(type:string){
  type === 'add' ? this.count++:this.count--;
  
}
    constructor(private api :ApiService,private cartService :CartService) { }
  
    ngOnInit(): void {
      this.api.getProduct()
      .subscribe(res=>{
        this.productList =res;
        const dataString =JSON.stringify(res);
        localStorage.setItem('res', dataString);
         this.filterCategory=res;
        this.productList.forEach((a:any)=> {
          // Object.assign(a,{total:a.price})
          Object.assign(a,{quantity:1,total:a.price})

        });
        console.log(this.productList);
        
      });
      this.cartService.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
    }
  
  //  itemCarts:any=[];
  addtocart(item:any){
  
  this.cartService.addtoCart(item);
 console.log( item.qty*item.price);

 let dataString = localStorage.getItem('res');

 // Convert the data back to its original format.
//  let data = JSON.parse(dataString);

 return dataString;


//  let cartDataNull = localStorage.getItem('localCart');
//  if(cartDataNull == null){
//   let storeDataGet : any=[];
//   storeDataGet.push(item);
//   localStorage.setItem('localCart', JSON.stringify(storeDataGet));
//  }
//  else{
//   const items:any=localStorage.getItem('localCart');
//   var prodId = item.id;
//   let index:number = -1;
//   // this.itemCarts=JSON.parse(items);
//   this.itemCarts=JSON.parse(localStorage.getItem('localCart')!);
//   // this.itemCarts =new BehaviorSubject(JSON.parse(items!)) ;
//   // this.itemCarts=new BehaviorSubject(items ? JSON.parse(items) : null)
//   for(let i=0;i<this.itemCarts.length;i++){
//     if(parseInt(prodId) === parseInt(this.itemCarts[i].prodId)){
//      this.itemCarts[i].qty=item.qty;
//      index =i;
//      break;
//     }
//   }
//   if(index == -1){
//     this.itemCarts.push(item);
//     localStorage.setItem('localCart',JSON.stringify(item));
//   }
//   else{
//     localStorage.setItem('localCart',JSON.stringify(item));

//   }
//  }
 
 
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
    //sort by Id
    key:string ='price';
    reverse:boolean=false;
    sort(key:any){
    this.key =key;
    this.reverse =!this.reverse;
    }
    search(event:any){
      this.searchTerm =(event.target as HTMLInputElement).value;
      console.log(this.searchTerm);
      this.cartService.search.next(this.searchTerm);
    }

   
  }
  

