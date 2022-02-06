import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-chatdetail',
  templateUrl: './chatdetail.component.html',
  styleUrls: ['./chatdetail.component.scss'],
})
export class ChatdetailComponent implements OnInit {
  @Input() user: any;
  newmessage:any; 

  passangerData:any;
  driverData:any;

  chats:any = []

  constructor(private storage: Storage,public modalController: ModalController, public afDB:AngularFireDatabase,) { }

  ngOnInit() {
    this.storage.create();
    // console.log("FROM DETAIL CHAT USER ===>", this.user)
    this.passangerData = this.user
    this.storage.get("user").then(res => {
      this.driverData = res
      console.log("DRIVER DATA FROM SESSION STORAGE ===>", res)
      this.getAllMessages(res)

    })

  }

  
  sendmessage(){
    let todayDate = new Date()
    let msgObj = {
      content: this.newmessage,
      senderId: this.driverData["id"],
      receiverId: this.passangerData["id"],
      senderName: this.driverData["fullname"],
      receiverName: this.passangerData["fullname"],
      dateTime: todayDate,
      role: this.driverData["role"]
    }

    if(msgObj["role"]=== "driver"){
      console.log("MESSAGE OBJ ===>", msgObj)
      this.afDB.list(`messages/${this.driverData["id"]}/`+msgObj["senderId"]+msgObj["receiverId"]).push(msgObj).then(res => {
        console.log("MSG ADDED ===>", res)
      })
    }else if(msgObj["role"]=== "passanger"){
      console.log("MESSAGE OBJ ===>", msgObj)
      this.afDB.list(`messages/${this.passangerData["id"]}/`+msgObj["receiverId"]+msgObj["senderId"]).push(msgObj).then(res => {
      console.log("MSG ADDED ===>", res)
    })
    }
    this.chats.push(msgObj)
    this.newmessage = ""
  }

  getAllMessages(userData){
    if(userData["role"]=== "driver"){
      this.afDB.list(`messages/${this.driverData["id"]}/`+this.driverData["id"]+this.passangerData["id"]).valueChanges().subscribe(res =>{
        // console.log("MESSAGES DRIVER ===>", res)
        this.chats = res
      })
    }else if(userData["role"]=== "passanger"){
      this.afDB.list(`messages/${this.passangerData["id"]}/`+this.passangerData["id"]+this.driverData["id"]).valueChanges().subscribe(res =>{
        // console.log("MESSAGES PASSANGER===>", res)
        this.chats = res
      })
    }
  }

  dismiss() {  
    this.modalController.dismiss();  
  }  

}
