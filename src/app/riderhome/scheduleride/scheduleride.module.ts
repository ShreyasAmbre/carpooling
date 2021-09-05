import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleridePageRoutingModule } from './scheduleride-routing.module';

import { ScheduleridePage } from './scheduleride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleridePageRoutingModule
  ],
  declarations: [ScheduleridePage]
})
export class ScheduleridePageModule {}
