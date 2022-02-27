import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import * as moment from 'moment';
import { Nasa } from '../../core/config/request.model'

import { Config } from 'src/app/core/config/config';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  today: string = moment().format(Config.dateFormat);
  sixDaysBefore: Array<string> = [];
  historial: Array<Nasa> = []
  constructor(private _dashboardService: DashboardService) {

  }
  public ngOnInit(): void {
    this.inicialize()

  }

  public inicialize() {
    this.buildDashboard()
    // this.historial = this._dashboardService.getHistorial().reverse()
    this.getHistorialFromNasa()
  }
  private buildDashboard(): void {

    for (let i = 1; i <= 6; i++) {
      const date = moment(this.today, Config.dateFormat).subtract(i, 'days').format(Config.dateFormat);

      this.sixDaysBefore.push(date)
    }
  }
  private getHistorialFromNasa() {
    // &start_date=2022-02-21&end_date=2022-02-26
    const end_date = this.sixDaysBefore[0];
    const start_date = this.sixDaysBefore[this.sixDaysBefore.length - 1];
    const url = this._dashboardService.request.concat('&start_date=' + start_date + '&end_date=' + end_date)
    this._dashboardService.getHistorial(url).subscribe(
      {
        next: (data: any) => this.historial = data,
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
      //   data => {
      //   this.apod = data;
      // }, (error: any) => {
      //   console.error(error)
      // }
    )

  }
}
