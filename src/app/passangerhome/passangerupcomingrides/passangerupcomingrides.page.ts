import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { PassangerlistComponent } from '../../component/passangerlist/passangerlist.component';
import { BookrideComponent } from '../../component/bookride/bookride.component'

@Component({
  selector: 'app-passangerupcomingrides',
  templateUrl: './passangerupcomingrides.page.html',
  styleUrls: ['./passangerupcomingrides.page.scss'],
})
export class PassangerupcomingridesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  async bookRideModal() {
    const modal = await this.modalController.create({
      component: BookrideComponent,
      cssClass: 'bookridecss'
    });
    return await modal.present();
  }

  ngOnInit() {
  }

  bookRide(){
    this.bookRideModal()
  }

}
