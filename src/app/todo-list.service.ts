import { TodoListStorageService } from './todo-list-storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

  constructor(private todoListStorageService: TodoListStorageService) { }

  getTodoList() {
    return this.todoListStorageService.get();
  }

  addItem(item): any {
    return this.todoListStorageService.post(item);
  }

  destroy(item): any {
    return this.todoListStorageService.destroy(item);
  }
}
