import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user';

@Injectable({
    providedIn: 'root'
  })

export class AppService {
    springEndpoint: string;
    response = null;
  constructor(private http: HttpClient) { 
      this.springEndpoint= 'http://localhost:9091/user/';
  }

  registerUser(user: User) {
    return this.http.post(this.springEndpoint+'register',user);
  }
  loginUser(user : User[]) : Observable<User[]> {
    return this.http.post<User[]>(this.springEndpoint+'login',user)
  }
  setResponse(res: any){
    this.response = res;
  }
  getResponse(){
    return this.response;
  }
}