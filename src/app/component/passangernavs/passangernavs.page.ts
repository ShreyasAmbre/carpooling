import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-passangernavs',
  templateUrl: './passangernavs.page.html',
  styleUrls: ['./passangernavs.page.scss'],
})
export class PassangernavsPage implements OnInit {

  navigate: any;

  constructor(public storage: Storage, public router:Router) { }

  ngOnInit() {
    this.sideMenu();
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Profile",
        url   : "/riderprofile",
        icon  : "person-outline"
      },
      {
        title : "Home",
        url   : "/riderhome",
        icon  : "home-outline"
      },
      {
        title : "Logout",
        url   : "/login",
        icon  : "log-out-outline"
      }
    ]
  }

  async logout(){
    this.storage.create();
    await this.storage.remove("username");
    this.router.navigateByUrl("/")
  }

}
