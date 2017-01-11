import { Component, Inject, EventEmitter, Input } from '@angular/core'
import { Observer, Observable } from 'rxjs'
import { Action, AddTodoAction, ToggleTodoAction, SetVisibilityFilter } from './actions';
import { AppState, Todo } from './state';
//import { dispatcher } from ''

@Component({ 
  selector: 'filter-link', 
  template: `<a href="#"><ng-content></ng-content></a>` 
}) 
class FilterLink { 
  @Input() filter: string; 

  constructor(
    @Inject(dispatcher) private dispatcher: Observer<Action>, 
    @Inject(state) private state: Observable<AppState>){} 

  get textEffect() { 
    return this.state.map(s => 
      s.visibilityFilter === this.filter ? 'underline' : 'none'); 
  } 

  setVisibilityFilter() { 
    this.dispatcher.next(new SetVisibilityFilter(this.filter)); 
  } 
} 

@Component({ 
  selector: 'footer', 
  template: `
   <filter-link filter="SHOW_ALL">All</filter-link>
   <filter-link  filter="SHOW_ACTIVE">Active</filter-link>
   <filter-link filter="SHOW_COMPLETED">Completed</filter-link>`
}) 
class Footer {}