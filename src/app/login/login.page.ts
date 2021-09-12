import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

  login(data){
    this.presentLoading()
    // console.log("Login Data", data)
    this.ngFireAuth.signInWithEmailAndPassword(data.email, data.password).then(res => {
      // console.log("LOGIN RES ===> ", res)
      this.loadingController.dismiss()
      this.router.navigateByUrl('/riderhome');

    }).catch(error => {
      // console.log("LOGIN ERROR", error)
      this.loadingController.dismiss()
      this.errorAlert("ERROR", "Login Failed", error)
    })

  }

  showpass(){
    this.fieldtype = "text"
  }
  hidepass(){
    this.fieldtype = "password"
  }

}
