import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassangerhomePage } from './passangerhome.page';

const routes: Routes = [

  {
    path: 'passangerhome',
    component: PassangerhomePage,
    children: [
      {
        path: 'passangerupcomingrides',
        loadChildren: () => import('./passangerupcomingrides/passangerupcomingrides.module').then( m => m.PassangerupcomingridesPageModule)
      },
      {
        path: 'passangerhistoryrides',
        loadChildren: () => import('./passangerhistoryrides/passangerhistoryrides.module').then( m => m.PassangerhistoryridesPageModule)
      },
      {
        path: 'passangerchat',
        loadChildren: () => import('./passangerchat/passangerchat.module').then( m => m.PassangerchatPageModule)
      },
      {
        path: 'passangermore',
        loadChildren: () => import('./passangermore/passangermore.module').then( m => m.PassangermorePageModule)
      },
      {
        path: 'passangerscheduleride',
        loadChildren: () => import('./passangerscheduleride/passangerscheduleride.module').then( m => m.PassangerscheduleridePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'passangerhome/passangerupcomingrides',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassangerhomePageRoutingModule {}
