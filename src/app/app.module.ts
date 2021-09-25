import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ChartModule } from 'angular-highcharts'

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { ChatdetailComponent } from './component/chatdetail/chatdetail.component';
import { PassangerlistComponent} from './component/passangerlist/passangerlist.component'
import { FormsModule } from '@angular/forms';

import { IonicStorageModule } from '@ionic/storage-angular';


var firebaseConfig = {
  apiKey: "AIzaSyD7tvlFJ6s7sEgm1pSzbi4Z_LjYNPM1v_s",
  authDomain: "pickupus-323903.firebaseapp.com",
  projectId: "pickupus-323903",
  databaseURL: "https://pickupus-323903-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "pickupus-323903.appspot.com",
  messagingSenderId: "801157563172",
  appId: "1:801157563172:web:f053fe77cbc1971218e9b1",
  measurementId: "G-FSY3H81T96"
}


@NgModule({
  declarations: [AppComponent, ChatdetailComponent, PassangerlistComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(), FormsModule, AngularFirestoreModule, AngularFireDatabaseModule, AngularFireAuthModule, AngularFireModule.initializeApp(firebaseConfig), 
            BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
