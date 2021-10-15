import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassangerupcomingridesPageRoutingModule } from './passangerupcomingrides-routing.module';

import { PassangerupcomingridesPage } from './passangerupcomingrides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassangerupcomingridesPageRoutingModule
  ],
  declarations: [PassangerupcomingridesPage]
})
export class PassangerupcomingridesPageModule {}
