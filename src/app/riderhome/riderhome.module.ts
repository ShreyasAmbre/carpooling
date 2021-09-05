import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiderhomePageRoutingModule } from './riderhome-routing.module';

import { RiderhomePage } from './riderhome.page';
import {NotificationPageModule} from '../component/notification/notification.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiderhomePageRoutingModule,
    NotificationPageModule
  ],
  declarations: [RiderhomePage]
})
export class RiderhomePageModule {}
