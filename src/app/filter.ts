import { Observable } from 'rxjs/Observable';
import { Action, SetVisibilityFilter } from './actions';
import { Todo } from './state';

export function filter(
	initState: string, 
	actions: Observable<Action>)
	: Observable<string> { 
   return actions.scan((state, action) => { 
     if (action instanceof SetVisibilityFilter) { 
       return action.filter; 
     } else { 
       return state; 
     } 
   }, initState); 
}