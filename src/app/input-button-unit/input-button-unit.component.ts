import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input"
      #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue(inputElementRef.value)">

    <button class="btn" (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})


export class InputButtonUnitComponent implements OnInit {
  @Input() title = 'Hello World';

  constructor() { }

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}
