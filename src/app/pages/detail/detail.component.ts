import { Nasa } from './../../core/config/request.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dateImage: string = '';
  apod: Nasa | undefined;
  constructor(private _detailService: DetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dateImage = this.route.snapshot.params['date'];
    this.getDataFromNasa();
  }

  getDataFromNasa(): void {
    const url = this._detailService.request.concat('&date=' + this.dateImage)
    this._detailService.getData(url).subscribe(
      {
        next: (data) => this.apod = data,
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
