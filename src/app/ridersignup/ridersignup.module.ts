import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidersignupPageRoutingModule } from './ridersignup-routing.module';

import { RidersignupPage } from './ridersignup.page';

import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidersignupPageRoutingModule,
    MatStepperModule,
    MatInputModule,
  ],
  declarations: [RidersignupPage]
})
export class RidersignupPageModule {}
