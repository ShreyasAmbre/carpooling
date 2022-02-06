import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
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
  {
    path: 'signuprole',
    loadChildren: () => import('./signuprole/signuprole.module').then( m => m.SignuprolePageModule)
  },
  {
    path: 'passangersignup',
    loadChildren: () => import('./passangersignup/passangersignup.module').then( m => m.PassangersignupPageModule)
  },
  {
    path: 'passangerhome',
    loadChildren: () => import('./passangerhome/passangerhome.module').then( m => m.PassangerhomePageModule)
  },
  {
    path: 'passangerprofile',
    loadChildren: () => import('./passangerprofile/passangerprofile.module').then( m => m.PassangerprofilePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
