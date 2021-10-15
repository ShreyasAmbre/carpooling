import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassangernavsPageRoutingModule } from './passangernavs-routing.module';

import { PassangernavsPage } from './passangernavs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassangernavsPageRoutingModule
  ],
  declarations: [PassangernavsPage],
  exports: [PassangernavsPage]
})
export class PassangernavsPageModule {}
