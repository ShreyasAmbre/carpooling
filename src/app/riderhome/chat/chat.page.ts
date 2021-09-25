import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainserviceService} from '../../services/mainservice.service';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';
import { ChatdetailComponent } from '../../component/chatdetail/chatdetail.component';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chartusers:any;
  detailChatUser:any;

  constructor(public modalController: ModalController, public afDB:AngularFireDatabase, private router: Router, 
              private service: MainserviceService) { }

  async chatDetailModal() {
    const modal = await this.modalController.create({
      component: ChatdetailComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        user: this.detailChatUser
      }
    });
    
    return await modal.present();
  }

  ngOnInit() {
    this.getAllUsers()
  }


  getAllUsers(){
    this.afDB.list('users/').valueChanges().subscribe(data => {
      this.chartusers = data
      // console.log("USERS DATA RES ===>", data)
    })
  }

  openDetailChat(user){
    this.detailChatUser = user
    console.log("DETAIL CHAT OPEN ===>", this.detailChatUser)
    this.chatDetailModal()
  }

}
