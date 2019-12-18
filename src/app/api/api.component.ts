import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  peoples = [];  
  constructor(private apiService: ApiService, public toastr: ToastrManager) { }

  ngOnInit() {
    this.getPeople()
  }
  getPeople() {
    this.apiService.getPeoples().subscribe((res)=>{
      this.peoples = res.results;
      this.toastr.successToastr('API hit successfully :-)', 'Success!');
    });
  }
}