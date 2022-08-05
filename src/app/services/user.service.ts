import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.service.url;
  private token = environment.service.token;
  private headers: HttpHeaders;
  constructor(
    private http:HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Authorization','Bearer '+this.token);
  }

  getUsersAll(){
    return this.http.get(`${this.url}users`, { headers : this.headers });
  }

  getUser( id:number ){
    return this.http.get(`${this.url}users/${id}`, { headers : this.headers });
  }

  addUser( user:any ){
    return this.http.post(`${this.url}users`, user, { headers : this.headers });
  }

  updateUser( id:number,user:any){
    return this.http.put(`${this.url}users/${id}`, user, { headers : this.headers });
  }

  deleteUser( id:number){
    return this.http.delete(`${this.url}users/${id}`, { headers : this.headers });
  }

}
