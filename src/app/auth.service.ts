import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    // Check whether the token is expired and return
    // true or false
    if(token)
      return true;
    return false;  
    //return !this.jwtHelper.isTokenExpired(token);
  }
}