import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassangerupcomingridesPage } from './passangerupcomingrides.page';

const routes: Routes = [
  {
    path: '',
    component: PassangerupcomingridesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassangerupcomingridesPageRoutingModule {}
