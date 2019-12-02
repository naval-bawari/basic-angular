import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = 'http://127.0.0.1:8000/api/list-users';

  constructor(private httpClient: HttpClient ) { }

  public getUserList() :Observable<any>{
    return this.httpClient.get (`${this.apiURL}`);
  }  
}
