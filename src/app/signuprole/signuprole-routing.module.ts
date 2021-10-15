import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignuprolePage } from './signuprole.page';

const routes: Routes = [
  {
    path: '',
    component: SignuprolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignuprolePageRoutingModule {}
