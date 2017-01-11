import { Observable } from 'rxjs/Observable';
import { Action, AddTodoAction, ToggleTodoAction } from './actions';
import { Todo } from './state';

export function todos(
	initState: Todo[], 
	actions: Observable<Action>)
	: Observable<Todo> {
      return actions.scan((state, action) => { 
        if (action instanceof AddTodoAction) { 
          const newTodo = {
            id: action.todoId, 
            text: action.text, 
            completed: false
          }; 
          return [...state, newTodo]; 
        } else { 
          return state; 
        } 
     }, initState); 
}

function updateTodo(
	todo: Todo, 
	action: Action)
	: Todo { 
  if (action instanceof ToggleTodoAction) { 
    // merge creates a new object using 
    // the properties of the passed in objects 
    return (action.id !== todo.id) ? 
      todo : 
      merge(todo, {completed: !state.completed}); 
  } else { 
    return todo; 
  } 
}