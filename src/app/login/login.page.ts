import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fieldtype = "password"


  constructor(private storage: Storage, private router:Router, public afStore: AngularFirestore, public ngFireAuth: AngularFireAuth, 
              public alertController: AlertController, public loadingController: LoadingController, public afDB:AngularFireDatabase,) { }

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
    this.storage.create();
  }

  login(data){
    this.presentLoading()
    // console.log("Login Data", data)
    this.ngFireAuth.signInWithEmailAndPassword(data.email, data.password).then(res => {
      // console.log("LOGIN RES ===> ", res.user)
      this.getUserDetails(res.user)
      this.loadingController.dismiss()
      

    }).catch(error => {
      // console.log("LOGIN ERROR", error)
      this.loadingController.dismiss()
      this.errorAlert("ERROR", "Login Failed", error)
    })
  }

  getUserDetails(user){
    this.afDB.list('users/', ref => ref.orderByChild("id").equalTo(user._delegate.uid)).valueChanges().subscribe(res => {
      // console.log("USERS DETAILS", res[0])
      this.storage.set('user', res[0]);

      if(res[0]["role"] === "driver")
      this.router.navigateByUrl('/riderhome');

      if(res[0]["role"] === "passanger")
      this.router.navigateByUrl('/passangerhome');

    })
  }

  showpass(){
    this.fieldtype = "text"
  }
  hidepass(){
    this.fieldtype = "password"
  }

}
