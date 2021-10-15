import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassangerchatPage } from './passangerchat.page';

const routes: Routes = [
  {
    path: '',
    component: PassangerchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassangerchatPageRoutingModule {}
