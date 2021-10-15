import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassangermorePageRoutingModule } from './passangermore-routing.module';

import { PassangermorePage } from './passangermore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassangermorePageRoutingModule
  ],
  declarations: [PassangermorePage]
})
export class PassangermorePageModule {}
