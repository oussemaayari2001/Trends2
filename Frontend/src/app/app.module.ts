import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AcceuilComponent } from './home/acceuil/acceuil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegformComponent } from './regform/regform.component';
import { SignuppasswordComponent } from './signuppassword/signuppassword.component';
import {HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { PlanformComponent } from './planform/planform.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { Home2Component } from './home2/home2.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { BackgroundComponent } from './background/background.component';
import { GardeComponent } from './garde/garde.component';
import { FooterComponent } from './footer/footer.component';
import { ModifEmpComponent } from './ModifEmp/ModifEmp.component';


@NgModule({
  declarations: [					
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    RegformComponent,
    SignuppasswordComponent,
    ErrorComponent,
    HeaderComponent,
    SignupComponent,
    PlanformComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BoardAdminComponent,
    Home2Component,
    BoardModeratorComponent,
    BoardUserComponent,
      HeaderComponent,
      BackgroundComponent,
      GardeComponent,
      FooterComponent,
      ModifEmpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent,BackgroundComponent]
})
export class AppModule { }
