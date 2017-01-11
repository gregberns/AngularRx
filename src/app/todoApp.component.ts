import { Component, Inject, EventEmitter } from '@angular/core'
import { stateAndDispatcher } from './stateAndDispatcher'

@Component({ 
  selector: 'ng-demo', 
  template: `
    <add-todo></add-todo>
    <todo-list></todo-list>
    <footer></footer> 
  `, providers: stateAndDispatcher 
}) 
class TodoApp {}