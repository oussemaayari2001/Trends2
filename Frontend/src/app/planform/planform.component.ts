import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../Services/authentification.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-planform',
  templateUrl: './planform.component.html',
  styleUrls: ['./planform.component.css']
})
export class PlanformComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthentificationService,private token:TokenStorageService,private fb:FormBuilder) { }
  prenom:string
  nom:string
  numCarte:number
  dateExp:Date
  cryptogramme:number
  email:string
  password:string
  dateMessage:boolean
  f:FormGroup=new FormGroup({
    prenom:new FormControl(''),
    nom:new FormControl(''),
    numCarte:new FormControl(),
    dateExp:new FormControl(''),
    cryptogramme:new FormControl(),
    email:new FormControl(''),
    password:new FormControl(''),

  })
  Today=new Date();
 
  chaine:any
  
  currentUser: any;
  ngOnInit(): void {
   
    
    console.log(this.Today.getMonth()+1); 

    this.email=sessionStorage.getItem('email');
    this.password=sessionStorage.getItem('password');
    console.log(this.password);
    this.f=this.fb.group({
      prenom:['',Validators.required],
      nom:['',Validators.required],
      numCarte:[,Validators.required],
      dateExp:['',Validators.required],
      cryptogramme:[,[Validators.minLength(3),Validators.maxLength(4),Validators.required]],
      email:[this.email],
      password:[this.password]
    })
 
    

  }
 
  ValidationDate():boolean{
    this.chaine=this.f.controls.dateExp.value; 
   let year= this.chaine.substring(0,4)//year
   let month= this.chaine.substring(5,7)
  let day= this.chaine.substring(8,10)
year=parseInt(year);

month=parseInt(month);
day=parseInt(day);




    return this.Today.getMonth()+1<month && this.Today.getFullYear()<=year && this.Today.getDate()<=day
  }
  get date(){
    return this.f.controls.dateExp
  }
  onSubmit(): void {

  // this.chaine=document.getElementById("date")[0];
 
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
   
    
    console.log(this.ValidationDate());
    
    
    }

}
