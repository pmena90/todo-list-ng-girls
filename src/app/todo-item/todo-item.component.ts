import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item" *ngIf="editing">
      <app-input-button-unit [title]="item.title" (submit)="editItem($event)"></app-input-button-unit>
    </div>
    <div class="todo-item" *ngIf="!editing">
      <input type="checkbox"
        class="todo-checkbox"
        (click)="completeItem()"
        [checked]="item.completed"/>

      <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
        {{ item.title }}
      </span>

      <button class="btn btn-blue" (click)="toogleEditingItem()">
        Edit
      </button>
      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    <div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  editing = false;

  @Input() item: TodoItem = { title: "" };
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

  editItem(title: string): void {
    this.update.emit({
      item: this.item,
      changes: { title: title }
    });

    this.toogleEditingItem();
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  toogleEditingItem(): void {
    this.editing = !this.editing;
  }

}
