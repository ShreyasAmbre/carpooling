import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';
import { ChatdetailComponent } from '../chatdetail/chatdetail.component';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-passangerlist',
  templateUrl: './passangerlist.component.html',
  styleUrls: ['./passangerlist.component.scss'],
})
export class PassangerlistComponent implements OnInit {
  chatPassanger:any;
  userData:any;
  
  constructor(private storage: Storage,public afDB:AngularFireDatabase, public modalController: ModalController,) { }

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
      console.log("DRIVER DATA FROM SESSION STORAGE ===>", res)
      this.getAllUsers(this.userData)

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


  openChat(user){
    // console.log("OPEN CHAT USER", user)
    this.chatDetailModal(user)
  }

}
