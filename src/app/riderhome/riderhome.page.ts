import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular'; 
import { NotificationComponent } from '../component/notification/notification.component';
import {HttpClient} from "@angular/common/http";
import { Storage } from '@ionic/storage-angular';
import { MainserviceService } from '../services/mainservice.service'

@Component({
  selector: 'app-riderhome',
  templateUrl: './riderhome.page.html',
  styleUrls: ['./riderhome.page.scss'],
})
export class RiderhomePage implements OnInit {
  tab:any;
  constructor(public modalController: ModalController, private http:HttpClient, private router: Router, private storage: Storage, private service : MainserviceService) { 
  }

  async notificationModal() {
    const modal = await this.modalController.create({
      component: NotificationComponent,
      cssClass: 'notificationcss',
    });
    return await modal.present();
  }

  

  ngOnInit() {
    this.storage.create();
    this.storage.get("user").then(res => {
      this.service.userData = res
    })
  }

}
