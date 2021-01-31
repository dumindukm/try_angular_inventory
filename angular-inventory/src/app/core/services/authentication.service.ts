import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user:User ;
  constructor(private http: HttpClient) { 
    this.user = new User();
  }

  public getCurrentUser()
  {
    return this.user;
  }

  public ValidateUser(name:string, password:string):boolean{
    var login = false;
    if(name == 'a' && password=='b')
    {
      login = true;
    }

    return login;
  }

}
