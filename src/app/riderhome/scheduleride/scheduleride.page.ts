import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scheduleride',
  templateUrl: './scheduleride.page.html',
  styleUrls: ['./scheduleride.page.scss'],
})
export class ScheduleridePage implements OnInit {
  source:any = "";
  destination:any = "";

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;

  driverRideData:any;

  constructor(public alertController: AlertController, public router:Router, private http:HttpClient, public toastController: ToastController) { }
  
  async successToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async scheduleride() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Schedule Ride',
      inputs: [
        { name: 'date_of_ride', type: 'date' },
        { name: 'time_of_ride', type: 'time' },
        { name: 'ride_fare', type: 'number', placeholder: "Cost"},
        { name: 'passanger_required', type: 'number', placeholder: "Passanger Count" },
        { name: 'car_name', type: 'text', placeholder: "Car Name" },
        { name: 'car_number_plate', type: 'text', placeholder: "Car No. Plate" },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Submit',
          handler: (inputs) => {
            this.bookride(inputs)
          }
        }
      ]
    });
    await alert.present();
  }


  ngOnInit() {
  }

  bookride(scheduledata){
    this.driverRideData = scheduledata
    this.driverRideData["sources"] = this.source
    this.driverRideData["destination"] = this.destination
    this.driverRideData["driver_id"] = 1
    console.log("DRIVER BOOK RIDE ===>", this.driverRideData)


    this.http.post("http://127.0.0.1:5000/bookdriverride",this.driverRideData).subscribe(res => {
      console.log("DRIVER RIDE BOOK RESPONSE ==>", res)
      if(res["msg"] == "Ride Booked Successfully"){
        this.successToast(res["msg"])
        this.router.navigate(['/riderhome/riderhome/upcomingrides']);
      }else{
        this.successToast("Something went wrong")
      }
    })
  }

}
