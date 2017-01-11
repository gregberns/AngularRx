import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Action, AddTodoAction, ToggleTodoAction } from './actions';
import { AppState, Todo } from './state';
import { filter } from './filter';
import { todos } from './todos'

export function stateFn(
	initState: AppState, 
	actions: Observable<Action>)
	: Observable<AppState> { 
  const combine = s => ({todos: s[0], visibilityFilter: s[1]});
  const appStateObs: Observable<AppState> = 
    todos(initState.todos, actions).   
    zip(filter(initState.visibilityFilter, actions)).
    map(combine); 
  return wrapIntoBehavior(initState, appStateObs); 
}

function wrapIntoBehavior(init, obs) { 
  const res = new BehaviorSubject(init); 
  obs.subscribe(s => res.next(s)); 
  return res; 
}