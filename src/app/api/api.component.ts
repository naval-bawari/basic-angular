import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  peoples = [];  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPeople()
  }
  getPeople() {
    this.apiService.getPeoples().subscribe((res)=>{
      this.peoples = res.results;
    });
  }
}