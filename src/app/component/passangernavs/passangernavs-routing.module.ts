import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassangernavsPage } from './passangernavs.page';

const routes: Routes = [
  {
    path: '',
    component: PassangernavsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassangernavsPageRoutingModule {}
