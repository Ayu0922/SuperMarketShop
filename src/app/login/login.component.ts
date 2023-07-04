import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  searchText:any;
  loginForm!:FormGroup
  changetype:boolean=true;
  visible:boolean=true; //to show & hide password
  uname:string=''
  password:string=''


    constructor(private formBuilder: FormBuilder,
                private http:HttpClient,
                private router:Router,
                ) { }
  
    ngOnInit(): void {
      this.loginForm=this.formBuilder.group({
        uname:['',[Validators.required]],
        password:['',[Validators.required]]
      })
    }

    
    logIn(){
      // this.authService.isUserLoggedIn()
      this.http.get<any>("http://localhost:3000/login").subscribe(res=>{
      const user = res.find((a:any)=>{
        localStorage.setItem('token',"getToken") //authService
  
        return a.uname === this.loginForm.value.uname && a.password === this.loginForm.value.password 
   
      })
      if(user){
        alert("You Have Login Successfully !!!");
       
        

        this.loginForm.reset();
       
        this.router.navigate(["home"])
      }
      else{
        alert("Login Failed !! Please Enter Valid Username & Password")
      
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
