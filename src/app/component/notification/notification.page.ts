import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  noti_count = 0;

  constructor() { }

  ngOnInit() {
    // this.noti_count = this.noti.getNotificatinoCount()
    console.log("Notification Value From Component",this.noti_count)
  }

}
