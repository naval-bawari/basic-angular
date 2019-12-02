import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('', Validators.required)
    })
  });

  lat = 51.678418;
  lng = 7.809007;

  constructor(public toastr: ToastrManager) { }

  ngOnInit() {

    if(localStorage.getItem('isLoginMSG')=="true"){
      this.toastr.successToastr('Login Successfully :-)', 'Success!');
      localStorage.setItem('isLoginMSG', 'false');
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }  

}
