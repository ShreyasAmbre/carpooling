import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {

  fieldtype = "password"

  constructor() { }

  ngOnInit() {
    
  }
  showpass(){
    this.fieldtype = "text"
  }
  hidepass(){
    this.fieldtype = "password"
  }
}
