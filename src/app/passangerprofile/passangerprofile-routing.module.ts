import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassangerprofilePage } from './passangerprofile.page';

const routes: Routes = [
  {
    path: '',
    component: PassangerprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassangerprofilePageRoutingModule {}
