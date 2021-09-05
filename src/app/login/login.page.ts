import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fieldtype = "password"


  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(data){
    console.log("Login Data", data)
    this.router.navigateByUrl('/riderhome');
  }

  forgetpassword(){
    console.log("GO TO FORGET PASSWORD SCREEN")
  }

  showpass(){
    this.fieldtype = "text"
  }
  hidepass(){
    this.fieldtype = "password"
  }

}
