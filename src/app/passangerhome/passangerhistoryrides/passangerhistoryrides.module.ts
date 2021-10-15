import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassangerhistoryridesPageRoutingModule } from './passangerhistoryrides-routing.module';

import { PassangerhistoryridesPage } from './passangerhistoryrides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassangerhistoryridesPageRoutingModule
  ],
  declarations: [PassangerhistoryridesPage]
})
export class PassangerhistoryridesPageModule {}
