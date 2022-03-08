import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Storage } from '@ionic/storage-angular';



import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fieldtype = "password"


  constructor(private storage: Storage, private router:Router, public afStore: AngularFirestore, public ngFireAuth: AngularFireAuth, 
              public alertController: AlertController, public loadingController: LoadingController, public afDB:AngularFireDatabase) { }

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
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ngOnInit() {
    this.storage.create();
  }

  login(data){
    this.ngFireAuth.signInWithEmailAndPassword(data.email, data.password).then(res => {
      this.getUserDetails(res.user)
    }).catch(error => {
      this.errorAlert("ERROR", "Login Failed", "Invalid Credentials")
    })
  }

  getUserDetails(user){
    this.afDB.list('users/', ref => ref.orderByChild("fid").equalTo(user._delegate.uid)).valueChanges().subscribe(res => {
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
