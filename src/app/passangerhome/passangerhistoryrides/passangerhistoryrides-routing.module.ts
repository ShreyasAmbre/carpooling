import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassangerhistoryridesPage } from './passangerhistoryrides.page';

const routes: Routes = [
  {
    path: '',
    component: PassangerhistoryridesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassangerhistoryridesPageRoutingModule {}
