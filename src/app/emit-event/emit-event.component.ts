import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildEventComponent } from '../child-event/child-event.component';

@Component({
  selector: 'app-emit-event',
  templateUrl: './emit-event.component.html',
  styleUrls: ['./emit-event.component.css']
})
export class EmitEventComponent implements OnInit {

  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];
  @ViewChild(ChildEventComponent, {static: false}) child : ChildEventComponent;
  constructor() { }

  ngOnInit() {
  }
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }  

  reset(){
    this.child.resetVal();
    this.agreed=0;
    this.disagreed=0;
  }

}
