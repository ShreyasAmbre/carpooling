import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassangerhomePageRoutingModule } from './passangerhome-routing.module';

import { PassangerhomePage } from './passangerhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassangerhomePageRoutingModule
  ],
  declarations: [PassangerhomePage]
})
export class PassangerhomePageModule {}
