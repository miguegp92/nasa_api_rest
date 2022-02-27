import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nasa } from 'src/app/core/config/request.model';
import { HttpService } from './../../core/services/http.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardService extends HttpService{

  constructor(http: HttpClient) {
    super(http);
  }

  getHistorial(url: string): Observable<Nasa> {
    return this.getMethod(url);
  }
}
