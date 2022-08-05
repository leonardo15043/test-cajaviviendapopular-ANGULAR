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
    //this.headers = this.headers.append();
  }

  getUsersAll(){
    return this.http.get(`${this.url}users`);
  }
}
