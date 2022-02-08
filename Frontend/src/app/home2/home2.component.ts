import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Services/authentification.service';
import { TokenStorageService } from '../Services/token-storage.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  
  isSuccessful=false;
  isSignUpFailed=false;
  errorMessage: string;
  isLoggedIn: boolean;

  constructor(private router:Router,private fb:FormBuilder,private auth:AuthentificationService,private tokenStorage:TokenStorageService) { }
  f:FormGroup

  get mail(){
    return this.f.controls.email
  }
  
 
    
  
    
  
  ngOnInit(): void {
    this.f=this.fb.group({
      email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]]
    })
    this.isLoggedIn = !!this.tokenStorage.getToken();
    
  }
  submit:boolean
  go(){
    if(this.isSuccessful)this.router.navigate(['/register/'])

  }
  error:string
  onsubmit(): void {
    this.submit=true
   if(!this.isLoggedIn){
      this.auth.ajout(this.f.value).subscribe(data=>  {  console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    
      console.log(this.isSuccessful);  
     
    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
      

    }
  
   
  );
  
 
  sessionStorage.setItem('email',this.f.controls.email.value)
setTimeout(() => {
  if(this.isSuccessful)this.router.navigate(['/register/'])
  
}, 1000);

  }
  
  }
  
}