import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }  from '@angular/common';
import {TodoComponent} from './todo.component';
import {TodoList} from './todo-list.component';
import {FilterSelectorComponent, FilterLink} from '../filter-selector/';
import {AddTodoComponent} from '../add-todo/add-todo.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TodoComponent, TodoList, FilterSelectorComponent, FilterLink, AddTodoComponent],
    providers: [],
    exports: [TodoComponent, TodoList, FilterSelectorComponent, FilterLink, AddTodoComponent]
})

export class TodoModule { }