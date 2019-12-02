import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements HttpInterceptor{

  
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>> {
    let token = req.clone({
        setHeaders:{
          Authorization : 'Bearer xx.yy.zzz'
        }
    });    
    return next.handle(token);
  }

  apiURL: string = 'https://randomuser.me/api/?page=10&results=2';

  constructor(private httpClient: HttpClient ) { }

  public getPeoples() :Observable<any>{
    return this.httpClient.get (`${this.apiURL}`);
  }

}
