import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainserviceService} from '../../services/mainservice.service';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';
import { ChatdetailComponent } from '../../component/chatdetail/chatdetail.component';

@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.scss'],
})
export class BookrideComponent implements OnInit {
  detailChatUser:any;

  constructor(public modalController: ModalController) { }

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

  ngOnInit() {}

  openChat(){
    this.chatDetailModal()
  }

  dismiss() {  
    this.modalController.dismiss();  
  }

}
