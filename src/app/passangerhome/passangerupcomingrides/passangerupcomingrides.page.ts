import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular'; 
import { PassangerlistComponent } from '../../component/passangerlist/passangerlist.component';
import { BookrideComponent } from '../../component/bookride/bookride.component'
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { ConfirmbookrideComponent } from '../../component/confirmbookride/confirmbookride.component'
import { MainserviceService } from 'src/app/services/mainservice.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-passangerupcomingrides',
  templateUrl: './passangerupcomingrides.page.html',
  styleUrls: ['./passangerupcomingrides.page.scss'],
})
export class PassangerupcomingridesPage implements OnInit {
  upcomingRides = []
  searchTerm:any;

  constructor(public modalController: ModalController, private http:HttpClient, public toastController: ToastController, private service : MainserviceService,  private storage: Storage,) { }

  async confirmRideModal(item) {
    const modal = await this.modalController.create({
      component: ConfirmbookrideComponent,
      cssClass: 'confirmridecss',
      componentProps: {
        "item": item
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
    this.upcomingRides = []
    let data = {}
    this.http.post("http://127.0.0.1:5000/allrides", data).subscribe(res => {
      let allRides = JSON.parse('[' + res + ']')[0]
      let todaysDate = moment().format('YYYY MM DD')
      for (let index = 0; index < allRides.length; index++) {
        // let dateOfRide = allRides[index]["date_of_ride"]
        // if((moment(dateOfRide).isSame(moment(), 'day') || moment(dateOfRide).isAfter(todaysDate)) && 
        //     allRides[index]["ride_status"] !== "cancelled"){
        //   if(allRides[index]["passanger_required"] > 0){
            this.upcomingRides.push(allRides[index])
          // }
        // }

      }
      // console.log("ALL RIDES RESPONSE ==>", allRides)
      console.log("UPCOMING RIDES ==>", this.upcomingRides)
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

  filterItems(searchTerm) {
    // console.log("SEARCH TERM ===>", searchTerm)
    if(searchTerm == ""){
      this.getAllRides()
    }else{
      this.upcomingRides = this.upcomingRides.filter(item => {
        return item.sources.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || 
        item.destination.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
    }
  }


}
