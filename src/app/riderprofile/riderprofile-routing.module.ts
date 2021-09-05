import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiderprofilePage } from './riderprofile.page';

const routes: Routes = [
  {
    path: '',
    component: RiderprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderprofilePageRoutingModule {}
