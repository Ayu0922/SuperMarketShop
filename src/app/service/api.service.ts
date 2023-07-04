import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
   
  }
  getProduct(){
   return this.http.get<any>("http://localhost:3000/product")
   .pipe(map((res:any)=>{
     return res;
   }))
 }
   //get records by id
   getbyId(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/product/${id}`);
  }
 addProduct(data:any){
  return this.http.post<any>("http://localhost:3000/product",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

getVegies(){
  return this.http.get<any>("http://localhost:3000/vegetables")
  .pipe(map((res:any)=>{
    return res;
  }))
}
addVegies(data:any){
 return this.http.post<any>("http://localhost:3000/vegetables",data)
 .pipe(map((res:any)=>{
   return res;
 }))
}

createAccountSingUp(data:any){
  return this.http.post<any>("http://localhost:3000/cr-acc",data)
  .pipe(map((res:any)=>{
    return res;
  }))
 }

getFruits(){
  return this.http.get<any>("http://localhost:3000/fruits")
  .pipe(map((res:any)=>{
    return res;
  }))
}
addFruits(data:any){
 return this.http.post<any>("http://localhost:3000/fruits",data)
 .pipe(map((res:any)=>{
   return res;
 }))
}

getBun(){
  return this.http.get<any>("http://localhost:3000/bekary")
  .pipe(map((res:any)=>{
    return res;
  }))
}
addBun(data:any){
 return this.http.post<any>("http://localhost:3000/bekary",data)
 .pipe(map((res:any)=>{
   return res;
 }))
}

getGrains(){
  return this.http.get<any>("http://localhost:3000/foodgrains")
  .pipe(map((res:any)=>{
    return res;
  }))
}
addGrains(data:any){
 return this.http.post<any>("http://localhost:3000/foodgrains",data)
 .pipe(map((res:any)=>{
   return res;
 }))
}
}
