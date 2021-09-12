import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-ridersignup',
  templateUrl: './ridersignup.page.html',
  styleUrls: ['./ridersignup.page.scss'],
})
export class RidersignupPage implements OnInit {

  constructor(private router:Router,public afStore: AngularFirestore, public ngFireAuth: AngularFireAuth, public alertController: AlertController) { }

  async errorAlert(headerMsg, subTitleMsg, errorMsg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: headerMsg,
      subHeader: subTitleMsg,
      message: errorMsg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }


  signup(data){
    // console.log("SIGNUP DATA ===>", data)
    this.ngFireAuth.createUserWithEmailAndPassword(data.email, data.password).then(res => {
      // console.log("SIGNUP RES ===>", res)
      this.router.navigateByUrl('/login');
    }).catch(errors => {
      // console.log("SIGNUP ERROR ===>", errors)
      this.errorAlert("ERROR", "Signup Failed", errors.message)
    })
  }

}
