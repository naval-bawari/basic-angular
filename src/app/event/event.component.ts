import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  postData = [
    {
      title : "Title 1",
      description : "Description 1"
    },
    {
      title : "Title 2",
      description : "Description 2"
    },
  ]

  constructor() { }
  
  ngOnInit() {
  }

}
