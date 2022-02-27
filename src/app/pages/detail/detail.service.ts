import { Nasa } from './../../core/config/request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DetailService  extends HttpService{

  constructor(http: HttpClient) {
    super(http);
  }

  getData(url: string): Observable<Nasa> {
    return this.getMethod(url);
  }
}
