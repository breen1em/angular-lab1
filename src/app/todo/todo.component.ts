import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'bake cookies',
      completed: true,
    },
  ];
  searchTerm: string;

  constructor() {}

  addTask(form: NgForm) {
    let newTask: Todo = {
      task: form.value.task,
      completed: false
    };
    this.todos.push(newTask);
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  setSearchTerm(form:NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }
  filter() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todos) => {
        let currentTodo = todos.task.toLowerCase().trim();
        return currentTodo.includes(this.searchTerm);
      });
    }
  }

  ngOnInit(): void {}
}
