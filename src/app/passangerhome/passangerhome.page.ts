import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../services/mainservice.service';


@Component({
  selector: 'app-passangerhome',
  templateUrl: './passangerhome.page.html',
  styleUrls: ['./passangerhome.page.scss'],
})
export class PassangerhomePage implements OnInit {

  constructor(private router: Router, private service: MainserviceService) { }

  ngOnInit() {
  }

}
