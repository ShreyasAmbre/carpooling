import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleridePage } from './scheduleride.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleridePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleridePageRoutingModule {}
