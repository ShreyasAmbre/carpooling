import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    LoginPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
