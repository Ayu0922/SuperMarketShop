import { Component ,OnInit} from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Product } from '../product';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
@Component({
  selector: 'app-add-bun-cake',
  templateUrl: './add-bun-cake.component.html',
  styleUrls: ['./add-bun-cake.component.css']
})
export class AddBunCakeComponent implements OnInit {
  productRecords!:FormGroup;
  productList:Product[]=[];
  prodObj:Product=new Product();
  subtitle: { id: string; name: string; }[] | any;
constructor(private formBuilder:FormBuilder,private api:ApiService,private router:Router){
  this.productRecords=this.formBuilder.group({
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
  // this.productRecords=this.formBuilder.group({
  //   id: [''],
  //   img: [''],
  //   subtitle: [''],
  //   title: [''],
  //   price: [''],
  //   bage: [''],
  //   off: [''],
  //   rate: [''],
  //   weight: ['']
    
  // })
 
}




addRecords(){
 
  console.log(this. productRecords);
  this.prodObj.id=this. productRecords.value.id;
  this.prodObj.img=this. productRecords.value.img;
  this.prodObj.title=this. productRecords.value.title;
  this.prodObj.subtitle=this. productRecords.value.subtitle;
  this.prodObj.price=this. productRecords.value.price;
  this.prodObj.bage=this. productRecords.value.bage;
  this.prodObj.off=this. productRecords.value.off;
  this.prodObj.rate=this. productRecords.value.rate;
  this.prodObj.weight=this. productRecords.value.weight;
  this.prodObj.sold=this. productRecords.value.sold;

  this.api.addBun(this.prodObj).subscribe(res=>{
    console.log(res);
    this.productRecords.reset();
    
  },err=>{
    console.log(err);
    
  })
}

getSubtitles() {
  return [
    { id: '1', name: 'Fresh Buns & Cakes' },
    { id: '2', name: 'Fresh Cup Cakes' },
    { id: '3', name: 'Bread & Cookies' },
 
   
    // { id: '5', name: 'Vegetables & Fruits' }

 
  ];
}
}
