import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-confirmbookride',
  templateUrl: './confirmbookride.component.html',
  styleUrls: ['./confirmbookride.component.scss'],
})
export class ConfirmbookrideComponent implements OnInit {
  @Input() item: any;
  driverDetails = []
  passangerData:any;

  constructor(public modalController: ModalController, private http:HttpClient, private storage: Storage, public router:Router, 
    public toastController: ToastController) { }

  async successToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.storage.create();
    // console.log("FROM DETAIL CHAT USER ===>", this.user)
    this.storage.get("user").then(res => {
      this.passangerData = res
      // console.log("USER SESSION STORAGE ===>", this.passangerData)
    })
    this.getRideDriverDetails(this.item)
  }

  getRideDriverDetails(item){
    let data = {
      id : item.driver_id,
    }

    this.http.post("http://127.0.0.1:5000/getdriverprofile", data).subscribe(res => {
      this.driverDetails = JSON.parse('[' + res + ']')[0][0]
      console.log("RIDE DRIVER DETAILS RESPONSE ==>", this.driverDetails)
      console.log("RIDE DATA ==>", item)
    })
  }


  confirmRide(){

    let data = {
      driver_id : this.driverDetails["id"], 
      passanger_id : 1, 
      ride_id : this.item["id"], 
      driver_fullname : this.driverDetails["fullname"], 
      driver_email : this.driverDetails["email"], 
      driver_contact : this.driverDetails["contact"], 
      passanger_fullname : this.passangerData["fullname"], 
      passanger_email : this.passangerData["email"], 
      passanger_contact : this.passangerData["contactno"], 
      sources : this.item["sources"], 
      destination : this.item["destination"], 
      ride_fare : this.item["ride_fare"], 
      date_of_ride : this.item["date_of_ride"],
      time_of_ride : this.item["time_of_ride"],
      car_name : this.item["car_name"], 
      car_number_plate : this.item["car_number_plate"],
      passanger_required: this.item["passanger_required"] - 1
    }
    console.log("CONFIRM BOOKED RIDES DATA",data)

    this.http.post("http://127.0.0.1:5000/passangerbookride", data).subscribe(res => {
      console.log("CONFIRM BOOKED RIDES", res)
      if(res["msg"] == "Confirmed Rides"){
        this.successToast(res["msg"])
        this.router.navigate(['/passangerhome/passangerhome/passangerscheduleride']);
      }
      if(res["msg"] == "Ride Already Confirmed"){
        this.successToast(res["msg"])
      }else{
        this.successToast("Confirmed Rides")
      }
    })
    this.modalController.dismiss()
  }

}
