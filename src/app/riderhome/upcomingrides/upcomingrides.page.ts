import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { PassangerlistComponent } from '../../component/passangerlist/passangerlist.component'

@Component({
  selector: 'app-upcomingrides',
  templateUrl: './upcomingrides.page.html',
  styleUrls: ['./upcomingrides.page.scss'],
})
export class UpcomingridesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  async passangerListModal() {
    const modal = await this.modalController.create({
      component: PassangerlistComponent,
      cssClass: 'passangerlistcss'
    });
    return await modal.present();
  }

  ngOnInit() {
  }


  openpassangerlist(){
    this.passangerListModal()
  }

}
