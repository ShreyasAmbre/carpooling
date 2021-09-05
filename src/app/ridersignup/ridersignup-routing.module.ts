import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidersignupPage } from './ridersignup.page';

const routes: Routes = [
  {
    path: '',
    component: RidersignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidersignupPageRoutingModule {}
