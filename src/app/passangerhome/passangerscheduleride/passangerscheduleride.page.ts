import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { CompleterideComponent } from '../../component/completeride/completeride.component'

@Component({
  selector: 'app-passangerscheduleride',
  templateUrl: './passangerscheduleride.page.html',
  styleUrls: ['./passangerscheduleride.page.scss'],
})
export class PassangerscheduleridePage implements OnInit {
  confirmRides = []

  constructor(private http:HttpClient, public modalController: ModalController, private service: MainserviceService) { }

  async openCompleteRide(item) {
    const modal = await this.modalController.create({
      component: CompleterideComponent,
      cssClass: 'completeridecss',
      componentProps: {
        "booked_ride_details": item,
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.getBookedRides()
  }

  getBookedRides(){
    let data = {
      passanger_id : this.service.userData["fid"]
    }

    this.http.post("http://127.0.0.1:5000/getpassangerbookedrides", data).subscribe(res => {
      let allRides = JSON.parse('[' + res + ']')[0]
      let todaysDate = moment().format('YYYY MM DD')
      for (let index = 0; index < allRides.length; index++) {
        // let dateOfRide = allRides[index]["date_of_ride"]
        // if((moment(dateOfRide).isSame(moment(), 'day') || moment(dateOfRide).isAfter(todaysDate)) && 
        //     allRides[index]["ride_status"] !== "cancelled" && allRides[index]["ride_status"] !== "completed"){
          this.confirmRides.push(allRides[index])
        // }
      }
      console.log("CONFIRM RIDES RESPONSE ==>", this.confirmRides)
    })
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.confirmRides = []
      this.getBookedRides()
      event.target.complete();
    }, 2000);
  }
}
