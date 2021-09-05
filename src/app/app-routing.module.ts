import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'riderprofile',
    loadChildren: () => import('./riderprofile/riderprofile.module').then( m => m.RiderprofilePageModule)
  },
  {
    path: 'ridersignup',
    loadChildren: () => import('./ridersignup/ridersignup.module').then( m => m.RidersignupPageModule)
  },
  {
    path: 'riderhome',
    loadChildren: () => import('./riderhome/riderhome.module').then( m => m.RiderhomePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./component/notification/notification.module').then( m => m.NotificationPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
