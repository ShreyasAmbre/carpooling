import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignuprolePageRoutingModule } from './signuprole-routing.module';

import { SignuprolePage } from './signuprole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignuprolePageRoutingModule
  ],
  declarations: [SignuprolePage]
})
export class SignuprolePageModule {}
