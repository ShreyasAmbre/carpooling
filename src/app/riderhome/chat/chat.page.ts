import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainserviceService} from '../../services/mainservice.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private router: Router, private service: MainserviceService) { }

  ngOnInit() {
    console.log(this.router.url)
  }

}
