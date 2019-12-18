import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  constructor(private httpClient: HttpClient, @Inject('API_URL') private baseUrl: string ) { }

  public postData(data) :Observable<any>{
    return this.httpClient.post (this.baseUrl+'post-user-data', data);
  }

  public getData(userId) :Observable<any>{
    return this.httpClient.get (this.baseUrl+'get-user-data/'+userId);
  }
}