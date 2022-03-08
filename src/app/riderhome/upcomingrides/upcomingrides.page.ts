import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular'; 
import { PassangerlistComponent } from '../../component/passangerlist/passangerlist.component';
import {HttpClient} from "@angular/common/http";
import * as moment from 'moment';
import { CompileTemplateMetadata } from '@angular/compiler';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-upcomingrides',
  templateUrl: './upcomingrides.page.html',
  styleUrls: ['./upcomingrides.page.scss'],
})
export class UpcomingridesPage implements OnInit {

  upcomingRides = []

  constructor(public modalController: ModalController, private http:HttpClient, public toastController: ToastController,  private service : MainserviceService,  private storage: Storage,) { }

  async passangerListModal(id) {
    const modal = await this.modalController.create({
      component: PassangerlistComponent,
      cssClass: 'passangerlistcss',
      componentProps: {
        "ride_id": id
      }
    });
    return await modal.present();
  }

  async successToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  

  ngOnInit() {
    this.storage.create();
    this.storage.get("user").then(res => {
      this.service.userData = res
      this.getAllRides()
    })
  }

  getAllRides(event?){
    let data = {
      fid : this.service.userData["fid"]
    }
    this.http.post("http://127.0.0.1:5000/getdriverrides", data).subscribe(res => {
      let allRides = JSON.parse('[' + res + ']')[0]
      let todaysDate = moment().format('YYYY MM DD')
      for (let index = 0; index < allRides.length; index++) {
        let dateOfRide = allRides[index]["date_of_ride"]
        if((moment(dateOfRide).isSame(moment(), 'day') || moment(dateOfRide).isAfter(todaysDate)) && 
            allRides[index]["ride_status"] !== "cancelled"){
          this.upcomingRides.push(allRides[index])
        }

      }
      // console.log("ALL RIDES RESPONSE ==>", allRides)
      // console.log("UPCOMING RIDES ==>", this.upcomingRides)
    })
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.upcomingRides = []
      this.getAllRides()
      event.target.complete();
    }, 2000);
  }

  openpassangerlist(item){
    this.passangerListModal(item.id)
    // this.successToast("No Passangers Available")
  }

}
