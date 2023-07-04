import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from '../service/api.service';
export class CrAcc{
  id:number=0;
    name:string='';
    email:string='';
    phone:string='';
    addr:string='';
    pin:number=0;
    city:string='';
    state:string='';
}
@Component({
  selector: 'app-buy-sign-up',
  templateUrl: './buy-sign-up.component.html',
  styleUrls: ['./buy-sign-up.component.css']
})
export class BuySignUpComponent {
  accRecords!:FormGroup;
  accList:CrAcc[]=[];
  accObj:CrAcc=new CrAcc();
  states: { id: string; name: string; }[] | any;

constructor(private formBuilder:FormBuilder,private api:ApiService,private router:Router){


  this.accRecords=this.formBuilder.group({
    id: [''],
    name: ['',Validators.required],
    email: ['',Validators.required],
    phone: ['',Validators.required],
    addr:['',Validators.required],
    pin:['',Validators.required],
    city:['',Validators.required],
   state: ['',Validators.required]
    
    
  })
  // this.subtitle = this.getSubtitles();
  of(this.getStates()).subscribe(states => {
    this.states = states;
  });
 
}
ngOnInit(): void {

}




addRecords(){
 
  console.log(this. accRecords);
  this.accObj.id=this. accRecords.value.id;
  this.accObj.name=this. accRecords.value.name;
  this.accObj.email=this. accRecords.value.email;
  this.accObj.phone=this. accRecords.value.phone;
  this.accObj.addr=this. accRecords.value.addr;
  this.accObj.pin=this. accRecords.value.pin;
  this.accObj.city=this. accRecords.value.city;
  this.accObj.state=this. accRecords.value.state;
  

  this.api.createAccountSingUp(this.accObj).subscribe(res=>{
    console.log(res);
    this.accRecords.reset();
    
  },err=>{
    console.log(err);
    
  })
}


getStates() {
  return [
    { id: '1', name: 'Andaman & Nicobar Island' },
    { id: '2', name: 'Andhra Pradesh' },
    { id: '3', name: 'Bihar' },
    { id: '4', name: 'Chandigarh' },
    { id: '5', name: 'Delhi' },
    { id: '6', name: 'Goa' },
    { id: '7', name: 'Haryana' },
    { id: '8', name: 'Jharkhand' },
    { id: '9', name: 'Karnataka' },
    { id: '10', name: 'Kerala' },
    { id: '11', name: 'Ladakh' },
    { id: '12', name: 'Maharashtra' },
    { id: '13', name: 'Nagaland' },
    { id: '14', name: 'Odisha' },
    { id: '15', name: 'Punjab' },
    { id: '16', name: 'Rajasthan' },
    { id: '17', name: 'Sikkim' },
    { id: '18', name: 'Tamil Nadu' },
    { id: '19', name: 'Uttar Pradesh' },
    { id: '20', name: 'West Bengal' }
    
 
  ];
}
}
