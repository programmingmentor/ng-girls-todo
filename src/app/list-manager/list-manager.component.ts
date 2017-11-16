import { TodoListService } from './../todo-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template: `
  <div class="todo-app">
    <h1>
      {{title}}
    </h1>

    <todo-input class="todo-add" (submit)="addItem($event)"></todo-input>

    <ul>
      <li *ngFor="let item of todoList">
        <todo-item [item]="item"
                   (remove)="removeItem($event)" ></todo-item>
      </li>
    </ul>
  <div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  title = 'ToDo App';
  todoList: Array<any>;

  addItem(title: string): void {
    this.todoList = this.todoListService.addItem(title);
  }

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  removeItem(item) {
    this.todoList = this.todoListService.destroy(item);
  }

}
