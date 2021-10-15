import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassangermorePage } from './passangermore.page';

const routes: Routes = [
  {
    path: '',
    component: PassangermorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassangermorePageRoutingModule {}
