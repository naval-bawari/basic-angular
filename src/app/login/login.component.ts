import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {
    username: "",
    password:""
  }
  constructor(private router: Router, public toastr: ToastrManager) { }

  ngOnInit() {
    //this.checkLoginStatus();
  }
  checkLoginStatus() {
    if(localStorage.getItem('currentUser'))
      this.router.navigate(['dashboard']);
    return;
  }

  onSubmit(){
    if(this.data.username=="admin" && this.data.password=="admin"){
      localStorage.setItem('currentUser', 'true');
      localStorage.setItem('isLoginMSG', 'true');
      this.router.navigate(['dashboard']);
      return;
    }
    this.toastr.errorToastr('Enter correct details', 'Error!');
    this.data.password="";
    this.data.username="";
  }

}
