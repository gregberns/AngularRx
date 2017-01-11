import { OpaqueToken } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { Action, AddTodoAction, ToggleTodoAction } from './actions';
import { stateFn } from './stateFn'

const initState = new OpaqueToken("initState"); 
const dispatcher = new OpaqueToken("dispatcher"); 
const state = new OpaqueToken("state"); 

export const stateAndDispatcher = [ 
  {
     provide: initState, 
     useValue: {todos: [], visibilityFilter: 'SHOW_ALL'}
  }, 
  {
    provide: dispatcher, 
    useValue: new Subject<Action>()
  }, 
  {
    provide: state,
    useFactory: stateFn,
    deps: [initState, dispatcher]
  }
];