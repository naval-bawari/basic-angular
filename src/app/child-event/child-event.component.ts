import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-child-event',
  templateUrl: './child-event.component.html',
  styleUrls: ['./child-event.component.css']
})
export class ChildEventComponent implements OnInit {

  @Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }  

  resetVal(){
    this.didVote=false;
  }

}
