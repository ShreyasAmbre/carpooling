import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassangerscheduleridePageRoutingModule } from './passangerscheduleride-routing.module';

import { PassangerscheduleridePage } from './passangerscheduleride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassangerscheduleridePageRoutingModule
  ],
  declarations: [PassangerscheduleridePage]
})
export class PassangerscheduleridePageModule {}
