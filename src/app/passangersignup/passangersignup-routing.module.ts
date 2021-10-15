import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassangersignupPage } from './passangersignup.page';

const routes: Routes = [
  {
    path: '',
    component: PassangersignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassangersignupPageRoutingModule {}
