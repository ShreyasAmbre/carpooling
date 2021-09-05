import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryridesPageRoutingModule } from './historyrides-routing.module';

import { HistoryridesPage } from './historyrides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryridesPageRoutingModule
  ],
  declarations: [HistoryridesPage]
})
export class HistoryridesPageModule {}
