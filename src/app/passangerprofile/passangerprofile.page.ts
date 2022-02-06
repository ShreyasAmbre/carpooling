import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passangerprofile',
  templateUrl: './passangerprofile.page.html',
  styleUrls: ['./passangerprofile.page.scss'],
})
export class PassangerprofilePage implements OnInit {

  profileData:any;

  constructor(private http:HttpClient, public toastController: ToastController, public alertController: AlertController, public router:Router, ) { }

  async editprofile() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Profile',
      inputs: [
        { name: 'fullname', type: 'text', value:this.profileData["fullname"], placeholder:'Full Name' },
        { name: 'contact', type: 'text', value:this.profileData["contact"], placeholder:'Contact' },
        { name: 'email', type: 'text', value:this.profileData["email"], placeholder:'Email' },
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
            this.editProfile(inputs)
          }
        }
      ]
    });
    await alert.present();
  }

  async successToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.getProfileData()
  }

  getProfileData(){
    let data = {
      id : 1
    }
    this.http.post("http://127.0.0.1:5000/getpassangerprofile", data).subscribe(res => {
      this.profileData = JSON.parse('[' + res + ']')[0][0]
      console.log("DRIVER PROFILE ==>", this.profileData)
    })
  }

  editProfile(data){
    console.log("EDITED PROFILE ==>", data)
    data["id"] = 1
    this.http.post("http://127.0.0.1:5000/passangerupdateprofile", data).subscribe(res => {
      if(res["msg"] == "Passanger details updated"){
        this.successToast(res["msg"])
        this.getProfileData()
      }else{
        this.successToast("Something went wrong")
      }
    })
  }

}
