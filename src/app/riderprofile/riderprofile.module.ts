import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiderprofilePageRoutingModule } from './riderprofile-routing.module';

import { RiderprofilePage } from './riderprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiderprofilePageRoutingModule
  ],
  declarations: [RiderprofilePage]
})
export class RiderprofilePageModule {}
