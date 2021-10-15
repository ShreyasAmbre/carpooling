import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-passangersignup',
  templateUrl: './passangersignup.page.html',
  styleUrls: ['./passangersignup.page.scss'],
})
export class PassangersignupPage implements OnInit {

  constructor(private router:Router, public afDB:AngularFireDatabase ,public afStore: AngularFirestore, public ngFireAuth: AngularFireAuth, public alertController: AlertController) { }

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

  passangerSignup(data){
    // console.log("SIGNUP DATA ===>", data)
    this.ngFireAuth.createUserWithEmailAndPassword(data.email, data.password).then(res => {
      // console.log("SIGNUP RES ===>", res)

      let user = {
        fullname: data.fullname,
        contactno: data.contact,
        email: res.user.email,
        id: res.user.uid,
        role: data.role
      };

      this.addUser(user)

    }).catch(errors => {
      // console.log("SIGNUP ERROR ===>", errors)
      this.errorAlert("ERROR", "Signup Failed", errors.message)
    })
  }


  // User data is added in seprate collection for further features like Chats and Push Notification
  addUser(userData){
    this.afDB.list("users/").push(userData).then(res => {
      // console.log("ADD USER RES ===>", res)
      this.router.navigateByUrl('/login');
    }).catch(e=> {
      // console.log("ADD USER ERROR ===>", e)
    })
  }
}
