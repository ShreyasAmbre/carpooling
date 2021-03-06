import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';
import { ChatdetailComponent } from '../chatdetail/chatdetail.component';
import { Storage } from '@ionic/storage-angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {HttpClient} from "@angular/common/http";
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-passangerlist',
  templateUrl: './passangerlist.component.html',
  styleUrls: ['./passangerlist.component.scss'],
})
export class PassangerlistComponent implements OnInit {
  @Input() ride_id: any;

  chatPassanger:any;
  userData:any;

  allPassangerOfRides = []
  
  constructor(private callNumber: CallNumber, private storage: Storage,public afDB:AngularFireDatabase, public modalController: ModalController,
    private http:HttpClient, private service: MainserviceService) { }

  async chatDetailModal(user) {
    const modal = await this.modalController.create({
      component: ChatdetailComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        user: user
      }
    });
    
    return await modal.present();
  }

  ngOnInit() {
    this.storage.create();
    this.storage.get("user").then(res => {
      this.userData = res
      // console.log("DRIVER DATA FROM SESSION STORAGE ===>", res)
      this.getAllUsers(this.userData)
      this.getAllPassangerOfRides()
    })
  }


  getAllUsers(userData){
    if(userData["role"] == "driver"){
      this.afDB.list('users/', ref => ref.orderByChild("role").equalTo("passanger")).valueChanges().subscribe(res => {
        // console.log("USERS WITH ROLE PASSANGER", res)
        this.chatPassanger = res
      })
    }else if(userData["role"] == "passanger"){
      this.afDB.list('users/', ref => ref.orderByChild("role").equalTo("driver")).valueChanges().subscribe(res => {
        // console.log("USERS WITH ROLE PASSANGER", res)
        this.chatPassanger = res
      })
    }
  }

  cancelRide(){
      let data = {
      fid : this.service.userData["fid"],
      ride_id : this.ride_id,
      ride_status: 'cancelled'
    }

    this.http.post("http://127.0.0.1:5000/updateridestatus", data).subscribe(res => {
      console.log("DRIVER RIDE STATUS RESPONSE ==>", res)
    })
    this.modalController.dismiss()
  }

  getAllPassangerOfRides(){
    let data = {
      ride_id : this.ride_id,
      driver_id : 1,
    }
    
    this.http.post("http://127.0.0.1:5000/passangerlistofrides", data).subscribe(res => {
      this.allPassangerOfRides = JSON.parse('[' + res + ']')[0]
      console.log("ALL PASSANGERS OF THIS RIDE", this.allPassangerOfRides)
    })
  }
  
  // callNow(number){
  //   this.callNumber.callNumber(number, true).then(res => {
  //     console.log('Launched dialer!', res)
  //   })
  //   .catch(err =>{
  //     console.log('Error launching dialer', err)
  //   });
  // }

  // openChat(user){
  //   // console.log("OPEN CHAT USER", user)
  //   this.chatDetailModal(user)
  // }


  

}
