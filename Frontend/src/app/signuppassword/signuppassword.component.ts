import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signuppassword',
  templateUrl: './signuppassword.component.html',
  styleUrls: ['./signuppassword.component.css']
})
export class SignuppasswordComponent implements OnInit {
f:FormGroup
email:string
  constructor(private activatedrouter:ActivatedRoute,private fb:FormBuilder) { }
get password(){
  return this.f.controls.password;
}
  ngOnInit(): void {
    this.email=this.activatedrouter.snapshot.params['mail'];
    this.f=this.fb.group({
      mail:[this.email],
      password:['',[Validators.required,Validators.pattern(".*[A-Za-z]*.*[0-9]*.*"),Validators.minLength(6),Validators.maxLength(60)]]
    })
  }

}
