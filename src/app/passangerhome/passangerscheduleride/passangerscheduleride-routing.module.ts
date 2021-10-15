import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassangerscheduleridePage } from './passangerscheduleride.page';

const routes: Routes = [
  {
    path: '',
    component: PassangerscheduleridePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassangerscheduleridePageRoutingModule {}
