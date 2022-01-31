import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
import { TokenStorageService } from '../Services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthentificationService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

for (let i =0;i < document.getElementsByTagName("input").length; i++){
 if( document.getElementsByTagName("input")[i].onclick){
  document.getElementsByTagName("input")[i].style.background="red"
 }
}


    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
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

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}