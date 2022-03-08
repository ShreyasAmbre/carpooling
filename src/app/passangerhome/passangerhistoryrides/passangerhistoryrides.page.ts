import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as moment from 'moment';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-passangerhistoryrides',
  templateUrl: './passangerhistoryrides.page.html',
  styleUrls: ['./passangerhistoryrides.page.scss'],
})
export class PassangerhistoryridesPage implements OnInit {

  historyRides = []


  constructor(private http:HttpClient, private service: MainserviceService) { }

  ngOnInit() {
    this.getAllRides()
  }

  getAllRides(){
    let data = {
      passanger_id : this.service.userData["fid"]
    }
    this.http.post("http://127.0.0.1:5000/getpassangerbookedrides", data).subscribe(res => {
      let allRides = JSON.parse('[' + res + ']')[0]
      let todaysDate = moment().format('YYYY MM DD')
      for (let index = 0; index < allRides.length; index++) {
        let dateOfRide = allRides[index]["date_of_ride"]
        if(moment(dateOfRide).isBefore(todaysDate) || allRides[index]["ride_status"] !== "pending"){
          
          allRides[index]["ride_status"] === "pending" ? allRides[index]["ride_status"] ="completed" : "cancelled"
          this.historyRides.push(allRides[index])
        }
      }
      console.log("ALL PASSANGER RIDES RESPONSE ==>", allRides)
      console.log("ALL PASSANGER RIDES RESPONSE ==>", this.historyRides)
    })
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.historyRides = []
      this.getAllRides()
      event.target.complete();
    }, 2000);
  }

}
