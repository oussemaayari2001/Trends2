import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { AuthentificationService } from '../Services/authentification.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-ModifEmp',
  templateUrl: './ModifEmp.component.html',
  styleUrls: ['./ModifEmp.component.css']
})
export class ModifEmpComponent implements OnInit {
  currentUser:any
 
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  f:FormGroup=new FormGroup({
    prenom:new FormControl(''),
    nom:new FormControl(''),
    numCarte:new FormControl(),
    dateExp:new FormControl(''),
    cryptogramme:new FormControl(),
    email:new FormControl(''),
    password:new FormControl(''),

  })
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
  constructor(private fb:FormBuilder,private auth :AuthentificationService,private activatedRoute:ActivatedRoute,private token: TokenStorageService) { }
id:number
  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.id=this.activatedRoute.snapshot.params['id'];
    this.f=this.fb.group({
      prenom:[this.currentUser.prenom,Validators.required],
      nom:[this.currentUser.nom,Validators.required],
      numCarte:[this.currentUser.numCarte,Validators.required],
      dateExp:[this.currentUser.dateExp,Validators.required],
      cryptogramme:[this.currentUser.cryptogramme,[Validators.minLength(3),Validators.maxLength(4),Validators.required]],
      email:[this.currentUser.email,Validators.required],
      password:['',Validators.required]
    })
  }
  get password(){
    return this.f.controls.password

  }
  
  chaine:any
  Today=new Date()
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
  onSubmit(){
this.auth.updateClient(this.id,this.f.value).subscribe(data =>{
  console.log(data);
  this.isSuccessful=true;
  this.isSignUpFailed=false
  
}),
err => {
  this.errorMessage = err.error.message;
  this.isSignUpFailed = true;
}
    
  }
  reloadPage(): void {
    window.location.reload();
  }

}
