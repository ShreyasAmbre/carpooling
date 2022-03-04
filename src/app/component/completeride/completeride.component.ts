import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-completeride',
  templateUrl: './completeride.component.html',
  styleUrls: ['./completeride.component.scss'],
})
export class CompleterideComponent implements OnInit {
  @Input() booked_ride_details: any;
  driverDetails = []
  ratings:any

  constructor(public modalController: ModalController, private http:HttpClient,) { 
  }
  
  ngOnInit() {
    this.getRideDriverDetails(this.booked_ride_details)
  }

  getRideDriverDetails(item){
    let data = {
      id : item.driver_id,
    }

    this.http.post("http://127.0.0.1:5000/getdriverprofile", data).subscribe(res => {
      this.driverDetails = JSON.parse('[' + res + ']')[0][0]
      console.log("RIDE DRIVER DETAILS RESPONSE ==>", this.driverDetails)
    })
  }

  updateRatings(){
    let total_ratings = this.driverDetails["ratings"] + this.ratings
    let data = {
      driver_id : this.driverDetails["id"],
      ride_id: this.booked_ride_details["ride_id"],
      passanger_id: this.booked_ride_details["passanger_id"],
      ratings: total_ratings,
      ride_status: "completed",
    }

    this.http.post("http://127.0.0.1:5000/updateratingsandridestatus", data).subscribe(res => {
      // this.driverDetails = JSON.parse('[' + res + ']')[0][0]
      console.log("UPDATE RIDE AND RATINGS ==>", res)
      this.modalController.dismiss()
    })
  }

  cancelBookedRide(){
    let data = {
      driver_id : this.driverDetails["id"],
      ride_id: this.booked_ride_details["ride_id"],
      passanger_id: this.booked_ride_details["passanger_id"],
      ride_status: "cancelled",
    }

    console.log(data)

    this.http.post("http://127.0.0.1:5000/updateratingsandridestatus", data).subscribe(res => {
      console.log("UPDATE RIDE CANCELLED ==>", res)
      this.modalController.dismiss()
    })
  }
}
