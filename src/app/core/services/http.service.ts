import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  request: string = Config.urlBase + `api_key=${Config.demo_key}`
  constructor(private http: HttpClient) { }

  public getMethod(url: any, options?: any): Observable<any>  {
    
    return this.http.get(url, options);
   
  }

  public postMethod(url: any, params?: any): Observable<any>  {
    
    return this.http.get(url, params);
   
  }
}
