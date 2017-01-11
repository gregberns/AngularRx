import { Component, Inject, EventEmitter } from '@angular/core'
import { Observer, Observable } from 'rxjs'
import { Action, AddTodoAction, ToggleTodoAction } from './actions';
import { AppState, Todo } from './state';
import { stateAndDispatcher } from './stateAndDispatcher'

@Component({ 
  selector: 'todo-list', 
  template: `<todo *ngFor="let t of filtered"></todo>`,
  providers: stateAndDispatcher 
}) 
class TodoList { 
  constructor(
    @Inject(dispatcher) private dispatcher: Observer<Action>,
    @Inject(state) private state: Observable<AppState>) {} 

  get filtered() { 
    return this.state.map(s => 
      getVisibleTodos(s.todos, s.visibilityFilter)); 
  } 

  emitToggle(id) { 
    this.dispatcher.next(new ToggleTodoAction(id)); 
  } 
}

function getVisibleTodos(todos, filter){
  return todos
}