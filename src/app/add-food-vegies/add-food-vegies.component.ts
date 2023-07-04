import { Component ,OnInit} from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Product } from '../product';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-food-vegies',
  templateUrl: './add-food-vegies.component.html',
  styleUrls: ['./add-food-vegies.component.css']
})
export class AddFoodVegiesComponent implements OnInit{
  foodRecords!:FormGroup;
  productList:Product[]=[];
  foodObj:Product=new Product();
  subtitle: { id: string; name: string; }[] | any;

  vegies: { id: string; name: string; }[] | any;

constructor(private formBuilder:FormBuilder,private api:ApiService,private router:Router){


  this.foodRecords=this.formBuilder.group({
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
  // this.subtitle = this.getSubtitles();
  of(this.getSubtitles()).subscribe(subtitle => {
    this.subtitle = subtitle;
  });
 
}
ngOnInit(): void {

}




addRecords(){
 
  console.log(this. foodRecords);
  this.foodObj.id=this. foodRecords.value.id;
  this.foodObj.img=this. foodRecords.value.img;
  this.foodObj.title=this. foodRecords.value.title;
  this.foodObj.subtitle=this. foodRecords.value.subtitle;
  this.foodObj.price=this. foodRecords.value.price;
  this.foodObj.bage=this. foodRecords.value.bage;
  this.foodObj.off=this. foodRecords.value.off;
  this.foodObj.rate=this. foodRecords.value.rate;
  this.foodObj.weight=this. foodRecords.value.weight;
  this.foodObj.sold=this. foodRecords.value.sold;

  this.api.addVegies(this.foodObj).subscribe(res=>{
    console.log(res);
    this.foodRecords.reset();
    
  },err=>{
    console.log(err);
    
  })
}

getSubtitles() {
  return [
    { id: '1', name: 'Leafy Green' },
    { id: '2', name: 'Root Vegetables' },
    { id: '3', name: 'Legume/Pea' },
    { id: '4', name: 'Spice Vegetable' },
    { id: '5', name: 'Edible Vegetable' },
   
    // { id: '5', name: 'Vegetables & Fruits' }

 
  ];
}


}
