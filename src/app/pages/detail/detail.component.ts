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
  apod: any;
  loading: boolean = true;
  constructor(private _detailService: DetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dateImage = this.route.snapshot.params['date'];
    this.getDataFromNasa();
  }

  goBack(){
    window.history.back();
  }
  getDataFromNasa(): void {
    this.loading = true;
    const url = this._detailService.request.concat('&date=' + this.dateImage)
    this._detailService.getData(url).subscribe(
      {
        next: (data) => this.apod = data,
        error: (e) => console.error(e),
        complete: () => this.loading = false
      }
      //   data => {
      //   this.apod = data;
      // }, (error: any) => {
      //   console.error(error)
      // }
    )
  }
}
