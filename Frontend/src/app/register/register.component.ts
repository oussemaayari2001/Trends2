import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../Services/authentification.service';
import { TokenStorageService } from '../Services/token-storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any={}
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthentificationService,private token:TokenStorageService,private fb:FormBuilder) { }
  username:string
  email:string
  f:FormGroup=new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),

  })
  currentUser: any;


  x:any
  y:any
  z:any
  hide(){
     this.x=document.getElementById("myInput");
     this.y=document.getElementById("hide1");

     this.z=document.getElementById("hide2");
    if (this.x.type==='password') {
      this.x.type='text';
      this.y.style.display='block';
      this.z.style.display='none'
    }
    else{
      this.x.type='password';
      this.y.style.display='none';
      this.z.style.display='block';

    }

  }







  ngOnInit(): void {
  this.email=sessionStorage.getItem('email');
  this.f=this.fb.group({
    email:[this.email],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
  // sessionStorage.clear()
    // this.currentUser = this.token.getTuser();
    // console.log(this.currentUser);
  }

  // onSubmit(): void {
   
  //   this.authService.register(this.form).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   );
  // }


get password(){
  return this.f.controls.password
}
  onSubmit(): void {
  
    this.authService.register(this.f.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(this.isSuccessful);
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }




























}