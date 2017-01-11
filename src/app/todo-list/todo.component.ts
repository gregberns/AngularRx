import { Component, Input, 
	Output, EventEmitter } from '@angular/core'


@Component({ 
  selector: 'todo', 
  template: `<span> {{text}} </span>` 
}) 
export class TodoComponent { 
  @Input() text: string; 
  @Input() completed: boolean; 
  @Output() toggle = new EventEmitter(); 
  get textEffect() { 
    return this.completed ? 'line-through' : 'none'; 
  } 
}