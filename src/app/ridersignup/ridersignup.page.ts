import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {HttpClient} from "@angular/common/http";
import { MainserviceService } from '../services/mainservice.service'
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-ridersignup',
  templateUrl: './ridersignup.page.html',
  styleUrls: ['./ridersignup.page.scss'],
})
export class RidersignupPage implements OnInit {
  aadharfile:any;
  cardocumentfile:any;
  drivinglicensefile:any;

  accDetailsData:any;
  carDetailsData:any;
  completeDriverData:any;
  base64textString = [];


  aadharFile:any;
  licenseFile:any;
  carFile:any;

  constructor(private router:Router, public afDB:AngularFireDatabase ,public afStore: AngularFirestore, public ngFireAuth: AngularFireAuth, public alertController: AlertController,
              private http:HttpClient, public services:MainserviceService, public toastController: ToastController) { }

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

  accDetails(data){
    // console.log("Acc Details ===>", data)
    this.accDetailsData = data
  }

  carDetails(data){
    // console.log("Car Details ===>", data, typeof(data))
    this.carDetailsData = data
    if(this.carDetailsData["aadharfile"] != "" && this.carDetailsData["licensefile"] != "" && this.carDetailsData["carfile"] != ""){
      this.carDetailsData["aadharfile"] = this.aadharFile
      this.carDetailsData["licensefile"] = this.licenseFile
      this.carDetailsData["carfile"] = this.carFile
      this.completeDriverData = Object.assign(this.carDetailsData, this.accDetailsData);
      this.signup(this.completeDriverData)
    }else{
      this.errorAlert("ERROR", "Signup Failed", "Crosscheck yours details")
    }
  }

  signup(data){
    console.log("DRIVER SIGNUP DATA ===>", data)
    this.http.post("http://127.0.0.1:5000/driversignup",data).subscribe(res => {
      console.log("RIDER RESPONSE SIGUP ==>", res)
      if(res["msg"] == "Account Created"){
        this.firebaseSignUp(data)
      }else{
        this.successToast("Something went wrong")
      }
    })
  }

  firebaseSignUp(data){
    this.ngFireAuth.createUserWithEmailAndPassword(data.email, data.password).then(res => {
      // console.log("SIGNUP RES ===>", res)

      let user = {
        fullname: data.fullname,
        contactno: data.contact,
        email: res.user.email,
        id: res.user.uid,
        role: data.role
      };

      this.firebaseAddUser(user)

    }).catch(errors => {
      // console.log("SIGNUP ERROR ===>", errors)
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

  onUploadChange(evt: any, fileFrom) {
    // console.log("FILE ===>", evt)
    const file = evt.target.files[0];
    var reader = new FileReader();


    if(fileFrom == 'aadharFile' && file){
      // var reader = new FileReader();
      reader.readAsDataURL(file);
      this.doAsyncReadingFile(reader).then( (val) =>{
        this.aadharFile = val
      })
    }

    if(fileFrom == 'licenseFile' && file){
      // var reader = new FileReader();
      reader.readAsDataURL(file);
      this.doAsyncReadingFile(reader).then( (val) =>{
        this.licenseFile = val
      })
    }

    if(fileFrom == 'carFile' && file){
      // var reader = new FileReader();
      reader.readAsDataURL(file);
      this.doAsyncReadingFile(reader).then( (val) =>{
        this.carFile = val
      })
    }
  }

  doAsyncReadingFile(reader) {
    return new Promise((resolve, reject) => {
        try {
          reader.onload = function () {
            // console.log("FILE CONVERTED TO BASE64 ===>", reader.result);
            resolve(reader.result);
          };
        } catch (error) {
          reject("Reject")
        }
    });
  }
  
}
