import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailService } from './detail.service';
import { DetailComponent } from './detail.component';
const routes: Routes = [
  {
    path: '',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [DetailService],
  exports: [RouterModule, DetailComponent]
})
export class DetailModule { }
