import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public toastr: ToastrManager) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoginMSG');
    this.toastr.infoToastr('User logout successfully ;-(', 'Info');
    this.router.navigate(['']);
  }

}
