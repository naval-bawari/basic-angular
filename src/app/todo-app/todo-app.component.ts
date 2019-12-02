import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  indexVal : number;
  isShow=false;
  item = "";
  todoList = [
    {
      name:"Vue",
    },
    {
      name:"React",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  addTodo(){
    this.todoList.push({name : this.item});
    this.item = "";
  }
  deleteTodo(index: number){
    this.todoList.splice(index, 1);
    this.isShowMethod(); 
  }
  editTodo(index: number){
    this.indexVal = index;
    this.isShow = true;
    this.item = this.todoList[index].name;
  }
  updateTodo(){
    this.todoList[this.indexVal].name = this.item;
    this.isShowMethod();    
  }
  cancel(){
    this.isShowMethod(); 
  }

  isShowMethod(){
    this.isShow = false;
    this.item = "";
  }
}
