import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/login';
const URL="http://localhost:3000/user"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  getClients():Observable<Login[]>{
    return this.http.get<Login[]>(URL);
    }
    addClient(p:Login):Observable<Login>{
      return this.http.post<Login>(URL, p);
      }
      deleteClient(id:number){
        return this.http.delete(URL+"/"+ id);
        }
        updateProduit(id:number, p:Login):Observable<Login>{
          return this.http.put<Login>(URL+"/"+ id, p);
          }
          
      
}
