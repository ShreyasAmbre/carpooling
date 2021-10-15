import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassangerchatPageRoutingModule } from './passangerchat-routing.module';

import { PassangerchatPage } from './passangerchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassangerchatPageRoutingModule
  ],
  declarations: [PassangerchatPage]
})
export class PassangerchatPageModule {}
