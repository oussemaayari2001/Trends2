import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tuser } from '../Models/tuser';
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private http:HttpClient) { }
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', credentials, httpOptions);
  }

  register(user): Observable<any> {
   
    return this.http.post(AUTH_API + 'signup', {
     
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  ajout(user):Observable<Tuser>{
    
    return this.http.post<Tuser>(AUTH_API + 'sign', {
    
      email: user.email,
 
    }, httpOptions);
}
  
}
