import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiderhomePage } from './riderhome.page';

const routes: Routes = [

  {
    path: 'riderhome',
    component: RiderhomePage,
    children: [
      {
        path: 'upcomingrides',
        loadChildren: () => import('./upcomingrides/upcomingrides.module').then( m => m.UpcomingridesPageModule)
      },
      {
        path: 'historyrides',
        loadChildren: () => import('./historyrides/historyrides.module').then( m => m.HistoryridesPageModule)
      },
      {
        path: 'scheduleride',
        loadChildren: () => import('./scheduleride/scheduleride.module').then( m => m.ScheduleridePageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('./more/more.module').then( m => m.MorePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'riderhome/upcomingrides',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderhomePageRoutingModule {}
