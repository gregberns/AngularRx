import { Component, Inject, EventEmitter, Input } from '@angular/core'
import { Observer, Observable } from 'rxjs'
import { Action, AddTodoAction, ToggleTodoAction, SetVisibilityFilter } from '../shared/actions';
import { AppState, Todo, dispatcher, state } from '../shared/stateAndDispatcher';

@Component({ 
  selector: 'filter-link', 
  template: `<a href="#"><ng-content></ng-content></a>` 
}) 
export class FilterLink { 
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
  selector: 'filter-selector', 
  template: `
   <filter-link filter="SHOW_ALL">All</filter-link>
   <filter-link  filter="SHOW_ACTIVE">Active</filter-link>
   <filter-link filter="SHOW_COMPLETED">Completed</filter-link>`
}) 
export class FilterSelectorComponent {}