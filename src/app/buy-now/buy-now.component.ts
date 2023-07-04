import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent {
  searchText:any;
  loginForm!:FormGroup
  changetype:boolean=true;
  visible:boolean=true; //to show & hide password
  phone:string='';



    constructor(private formBuilder: FormBuilder,
                private http:HttpClient,
                private router:Router,
                ) { }
  
    ngOnInit(): void {
      this.loginForm=this.formBuilder.group({
        phone:['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
       
      })
    }

    
    logIn(){
      // this.authService.isUserLoggedIn()
      this.http.get<any>("http://localhost:3000/cr-acc").subscribe(res=>{
      const user = res.find((a:any)=>{
        localStorage.setItem('token',"getToken") //authService
  
        return a.phone === this.loginForm.value.phone 
   
      })
      if(user){
        alert("You Have Login Successfully !!!");
       
        

        this.loginForm.reset();
       
        this.router.navigate(["home"])
      }
      else{
        alert("Login Failed !! Please Enter Valid Phone Number")
      
      }
    },err=>{
      alert("Restart Your JSON Server !!!! ")
     
      console.log(err)
    })
    }
    viewpass(){
      this.visible=!this.visible;
      this.changetype=!this.changetype;
    }
}
