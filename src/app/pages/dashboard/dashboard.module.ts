import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ],
  providers: [DashboardService],
  exports: [RouterModule, DashboardComponent]
})
export class DashboardModule { }
