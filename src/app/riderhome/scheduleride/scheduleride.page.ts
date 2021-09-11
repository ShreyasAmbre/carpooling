import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scheduleride',
  templateUrl: './scheduleride.page.html',
  styleUrls: ['./scheduleride.page.scss'],
})
export class ScheduleridePage implements OnInit {
  source:any = "";
  destination:any = "";

  constructor(public alertController: AlertController, public router:Router) { }

  async scheduleride() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Schedule Ride',
      inputs: [
        // input date without min nor max
        {
          name: 'Date',
          type: 'date',
        },
        {
          name: 'Time',
          type: 'time',
        },
        {
          name: 'Cost',
          type: 'number',
          placeholder: "Cost"
        },
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
    console.log("BOOK RIDE ===>", scheduledata, this.source, this.destination)
    this.router.navigate(['/riderhome/riderhome/upcomingrides']);
  }

}
