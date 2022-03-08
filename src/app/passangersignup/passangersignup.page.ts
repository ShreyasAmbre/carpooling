import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {HttpClient} from "@angular/common/http";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-passangersignup',
  templateUrl: './passangersignup.page.html',
  styleUrls: ['./passangersignup.page.scss'],
})
export class PassangersignupPage implements OnInit {

  constructor(private router:Router, public afDB:AngularFireDatabase ,public afStore: AngularFirestore, public ngFireAuth: AngularFireAuth, 
    public alertController: AlertController, private http:HttpClient, public toastController: ToastController) { }

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
  async successToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  
  
  ngOnInit() {
  }

  passangerSignup(data){
    console.log("PASSANGER SIGNUP DATA ===>", data)

    this.http.post("http://127.0.0.1:5000/passangersignup",data).subscribe(res => {
      console.log("PASSANGER RESPONSE SIGUP ==>", res)
      if(res["msg"] == "Account Created"){
        // this.firebaseSignUp(data)
        this.firebaseAddUser(data)
        }else{
        this.successToast("Something went wrong")
      }
    })
  }

  firebaseSignUp(data){
    this.ngFireAuth.createUserWithEmailAndPassword(data.email, data.password).then(res => {
      let user = {
        fullname: data.fullname,
        contactno: data.contact,
        email: res.user.email,
        id: res.user.uid,
        role: data.role
      };

      data["fid"] = res.user.uid
      this.passangerSignup(data)
      console.log("//////////// PASSANGER FID", data)
      // this.firebaseAddUser(user)

    }).catch(errors => {
      this.errorAlert("ERROR", "Signup Failed", errors.message)
    })
  }

  firebaseAddUser(userData){
    this.afDB.list("users/").push(userData).then(res => {
      this.successToast("Account Created")
      this.router.navigateByUrl('/login');
    }).catch(e=> {
    })
  }

  
}
