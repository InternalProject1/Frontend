import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

 constructor(private http:HttpClient) { }

 url="" ;
 enroll(user:UserModel){
   return this.http.post<any>(this.url,user);
 }
}
