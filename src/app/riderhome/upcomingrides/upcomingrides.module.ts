import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingridesPageRoutingModule } from './upcomingrides-routing.module';

import { UpcomingridesPage } from './upcomingrides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingridesPageRoutingModule
  ],
  declarations: [UpcomingridesPage]
})
export class UpcomingridesPageModule {}
