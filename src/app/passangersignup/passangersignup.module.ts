import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassangersignupPageRoutingModule } from './passangersignup-routing.module';

import { PassangersignupPage } from './passangersignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassangersignupPageRoutingModule
  ],
  declarations: [PassangersignupPage]
})
export class PassangersignupPageModule {}
