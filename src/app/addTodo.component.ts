import { Component, Inject, EventEmitter } from '@angular/core'
import { Observer, Observable } from 'rxjs'
import { Action, AddTodoAction, ToggleTodoAction } from './actions';

@Component({ 
  selector: 'add-todo', 
  template: `<input><button>Add Todo</button>` 
}) 
class AddTodo { 
  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>) {} 

  addTodo(value) { 
    this.dispatcher.next(new AddTodoAction(nextId++, value)); 
  } 
}