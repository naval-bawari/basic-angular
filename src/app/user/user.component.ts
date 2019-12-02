import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private apiService: UserService) { }

  displayedColumns: string[] = ['name', 'email'];
  listUserData :any = [];

  ngOnInit() {
    this.listUser();
  }
  listUser() {
    this.apiService.getUserList().subscribe((res: { data: any[]; })=>{
      this.listUserData = res.data;
    });
  }

}