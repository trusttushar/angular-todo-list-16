import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoTitle: string = 'This is a todo list app';
  todoDate: Date = new Date();
  todoName: string = '';
  todoList: Todo[] = [];

  ngOnInit(): void {
    let retrievedList = localStorage.getItem('todo');
    this.todoList = retrievedList ? JSON.parse(retrievedList) : [];
  }

  addToTodo() {
    let newTodo: Todo = {
      id: Math.floor(Math.random() * 100) + 1,
      name: this.todoName,
      date: this.todoDate,
    };
    this.todoList.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(this.todoList));
    this.todoName = '';
    this.todoDate = new Date();
  }
  removeFromTodo(index: number) {
    this.todoList.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(this.todoList));
  }
}
