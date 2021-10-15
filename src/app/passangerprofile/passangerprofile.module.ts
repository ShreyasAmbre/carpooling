import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassangerprofilePageRoutingModule } from './passangerprofile-routing.module';

import { PassangerprofilePage } from './passangerprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassangerprofilePageRoutingModule
  ],
  declarations: [PassangerprofilePage]
})
export class PassangerprofilePageModule {}
