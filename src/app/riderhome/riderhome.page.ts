import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainserviceService} from '../services/mainservice.service';


@Component({
  selector: 'app-riderhome',
  templateUrl: './riderhome.page.html',
  styleUrls: ['./riderhome.page.scss'],
})
export class RiderhomePage implements OnInit {
  tab:any;
  constructor(private router: Router, private service: MainserviceService) { 
  }

  ngOnInit() {
    
  }

}
