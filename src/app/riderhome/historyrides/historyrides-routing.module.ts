import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryridesPage } from './historyrides.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryridesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryridesPageRoutingModule {}
