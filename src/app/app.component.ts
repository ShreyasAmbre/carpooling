import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform: Platform, public router: Router) {
    this.platform.ready();{
      if (window.location.pathname === "/"){
        this.router.navigateByUrl('/login');
      }
    }
  }

 
}
