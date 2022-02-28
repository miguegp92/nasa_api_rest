import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import * as moment from 'moment';
import { Nasa } from '../../core/config/request.model'

import { Config } from 'src/app/core/config/config';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  today: string = moment().format(Config.dateFormat);
  sixDaysBefore: Array<string> = [];
  historial: Array<Nasa> = [];
  loading: boolean = true;
  colsGrid: number = 3;
  gridByBreakpoint = {
    md: 3,
    sm: 2,
    xs: 1
  }

  constructor(private _dashboardService: DashboardService, private router: Router) {

  }
  public ngOnInit(): void {
    this.inicialize()

  }

  public inicialize() {
    this.buildDashboard()
    // this.historial = this._dashboardService.getHistorial().reverse()
    this.getHistorialFromNasa();
    
  }
  private buildDashboard(): void {

    for (let i = 1; i <= 6; i++) {
      const date = moment(this.today, Config.dateFormat).subtract(i, 'days').format(Config.dateFormat);

      this.sixDaysBefore.push(date)
    }
  }

  onResize(event: any) {
    this.colsGrid = (event.target.innerWidth <= 700) ? 1 : 3;
  }

  redirectTo(dateElement: string){
    this.router.navigate(['/detail', dateElement]);
  }

  private getHistorialFromNasa() {
    this.loading = true;
    const end_date = this.sixDaysBefore[0];
    const start_date = this.sixDaysBefore[this.sixDaysBefore.length - 1];
    const url = this._dashboardService.request.concat('&start_date=' + start_date + '&end_date=' + end_date)
    this._dashboardService.getHistorial(url).subscribe(
      {
        next: (data: any) => this.historial = data.reverse(),
        error: (e) => console.error(e),
        complete: () => this.loading = false
      }

    )

  }
}
