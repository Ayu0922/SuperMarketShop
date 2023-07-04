import { Component,OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Product } from '../product';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
@Component({
  selector: 'app-add-fruits',
  templateUrl: './add-fruits.component.html',
  styleUrls: ['./add-fruits.component.css']
})
export class AddFruitsComponent implements OnInit{
  fruitRecords!:FormGroup;
  productList:Product[]=[];
  fruitObj:Product=new Product();
  fruit: { id: string; name: string; }[] | any;

  

constructor(private formBuilder:FormBuilder,private api:ApiService,private router:Router){


  this.fruitRecords=this.formBuilder.group({
    id: [''],
    img: ['',Validators.required],
    subtitle: ['',Validators.required],
    title: ['',Validators.required],
    price: ['',Validators.required],
    bage: [''],
    off: [''],
    rate: ['',Validators.required],
    weight: ['',Validators.required],
    sold:['']
    
  })
  // this.fruit = this.getfruits();
  of(this.getfruitFruit()).subscribe(fruit => {
    this.fruit = fruit;
  });
 
}
ngOnInit(): void {

}




addRecords(){
 
  console.log(this. fruitRecords);
  this.fruitObj.id=this. fruitRecords.value.id;
  this.fruitObj.img=this. fruitRecords.value.img;
  this.fruitObj.title=this. fruitRecords.value.title;
  this.fruitObj.subtitle=this. fruitRecords.value.subtitle;
  this.fruitObj.price=this. fruitRecords.value.price;
  this.fruitObj.bage=this. fruitRecords.value.bage;
  this.fruitObj.off=this. fruitRecords.value.off;
  this.fruitObj.rate=this. fruitRecords.value.rate;
  this.fruitObj.weight=this. fruitRecords.value.weight;
  this.fruitObj.sold=this. fruitRecords.value.sold;

  this.api.addFruits(this.fruitObj).subscribe(res=>{
    console.log(res);
    this.fruitRecords.reset();
    
  },err=>{
    console.log(err);
    
  })
}



getfruitFruit(){
  return [
    { id: '1', name: 'Citrus Fruit' },
    { id: '2', name: 'Stone Fruit' },
    { id: '3', name: 'Tropical & Exotic Fruit' },
    { id: '4', name: 'Berries' },
    { id: '5', name: 'Melons' },
   
    // { id: '5', name: 'Vegetables & Fruits' }

 
  ];
}
}
