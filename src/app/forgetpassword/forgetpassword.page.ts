import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {

  fieldtype = "password"

  constructor(private router:Router, public afStore: AngularFirestore, public ngFireAuth: AngularFireAuth, 
    public alertController: AlertController, public loadingController: LoadingController) { }

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

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ngOnInit() {
    
  }

  forgetpassword(data){
    // console.log("FORGET PASSWORD RES ===>", data)
    this.presentLoading()
    this.ngFireAuth.sendPasswordResetEmail(data.email).then(res => {
      // console.log("RESET PASSWORD RES ===> ", res)
      this.loadingController.dismiss()
      this.router.navigateByUrl('/login');

    }).catch(error => {
      // console.log("RESET PASSWORD ERROR", error)
      this.loadingController.dismiss()
      this.errorAlert("ERROR", "Password Reset Failed", error)
    })
  }

}
