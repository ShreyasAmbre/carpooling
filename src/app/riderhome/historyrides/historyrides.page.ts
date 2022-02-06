import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as moment from 'moment';

@Component({
  selector: 'app-historyrides',
  templateUrl: './historyrides.page.html',
  styleUrls: ['./historyrides.page.scss'],
})
export class HistoryridesPage implements OnInit {

  historyRides = []

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllRides()
  }


  getAllRides(){
    let data = {
      driver_id : 1
    }
    this.http.post("http://127.0.0.1:5000/getdriverrides", data).subscribe(res => {
      let allRides = JSON.parse('[' + res + ']')[0]
      let todaysDate = moment().format('YYYY MM DD')
      for (let index = 0; index < allRides.length; index++) {
        let dateOfRide = allRides[index]["date_of_ride"]
        if(moment(dateOfRide).isBefore(todaysDate) || allRides[index]["ride_status"] !== "pending"){
          
          allRides[index]["ride_status"] === "pending" ? allRides[index]["ride_status"] ="completed" : "cancelled"
          this.historyRides.push(allRides[index])
        }
      }
      console.log("ALL RIDES RESPONSE ==>", allRides)
      console.log("ALL RIDES RESPONSE ==>", this.historyRides)
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
