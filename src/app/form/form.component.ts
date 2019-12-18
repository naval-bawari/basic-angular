import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { FormService } from './form.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profileForm: FormGroup;
  submitted=false;
  valueForm = {
    firstName: "items.name",
    lastName: "items.last name",
    email: "debut@info.in",
    address: {
      street: "Street",
      city: "City",
      state: "items.address.country",
      zip: "items.address.zip"
    }  
   
  };  
  constructor(private fb: FormBuilder, private api: FormService, public toastr: ToastrManager ) { }
  ngOnInit() {
    this.initForm();
    this.getUserData();
  }

  initForm() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.array([this.initItemRows()])
    });
  }

  get f() { return this.profileForm.controls; }

  onSubmit(){
    this.submitted=true;
    if (this.profileForm.invalid) {
      return;
    }
    this.postUserDataApi();
  }

  onReset() {
    this.submitted = false;
    this.profileForm.reset();
  }  

  initItemRows() {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }

  get formArr() {
    return this.profileForm.controls.address as FormArray;
  }

  addMoreAddress(){
    this.formArr.push(this.initItemRows());
  }

  deleteAddress(index){
    this.formArr.removeAt(index);
  }

  setValue(){
    this.profileForm.setValue(this.valueForm);
  }

  postUserDataApi() {
    this.api.postData(this.profileForm.value).subscribe((res)=> {
      this.toastr.successToastr('User add Successfully :-)', 'Success!');
      this.submitted = false;
      this.profileForm.reset();
    });     
  }

  getUserData(){

    this.api.getData(68).subscribe((res)=> {
    
      for (let player=this.profileForm.controls.address.value.length; player < res.address.length; player++){
        this.formArr.push(this.initItemRows());
      }
      this.profileForm.patchValue(res);
      this.toastr.successToastr('API hit Successfully :-)', 'Success!');
    });     
  }
}