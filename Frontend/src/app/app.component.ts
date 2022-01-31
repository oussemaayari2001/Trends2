import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './Services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
tab:string[]=["La Transformation Digitale","L'expérience Digitale","L'humain |"];
mot:string
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    // setInterval(this.changer,500)
   
    // console.log(this.mot);
    this.changer();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  i:number=0
  changer(){
    
    setInterval(()=>{
      
    
      document.getElementById('mot').innerHTML=this.tab[this.i]
   this.i++
   if (this.i>=3) {
this.i=0
   }
    },
    1000)
    }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}