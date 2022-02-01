import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ErrorComponent } from './error/error.component';
import { GardeComponent } from './garde/garde.component';
import { AcceuilComponent } from './home/acceuil/acceuil.component';
import { Home2Component } from './home2/home2.component';
import { LoginComponent } from './login/login.component';

import { PlanformComponent } from './planform/planform.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { SignuppasswordComponent } from './signuppassword/signuppassword.component';

// const routes: Routes = [
// {path:'acceuil',component:AcceuilComponent},
// {path:'login',component:LoginComponent},//Page identification
// {path:'signup/password/:mail',component:SignuppasswordComponent},//Page pour reclamer le mot de passe 
// {path:'signup',component:SignupComponent},
// {path:'signup/planform',component:PlanformComponent},//Choisir Le type d'abonnement 
// {path:'',redirectTo:'acceuil',pathMatch:'full'},
// {path:'**',component:ErrorComponent}
// ];
const routes: Routes = [
  { path: 'home', component:Home2Component  },
  {path:'Garde',component:GardeComponent},
{path:'signup/password',component:SignuppasswordComponent},//Page pour reclamer le mot de passe 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'planform',component:PlanformComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path:'background',component:BackgroundComponent},
  { path: '', redirectTo: 'Garde', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
