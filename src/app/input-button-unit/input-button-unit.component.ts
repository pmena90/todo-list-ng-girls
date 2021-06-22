import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input"
      #inputElementRef
      [value]="title"
      (input)= onChangeInput(inputElementRef.value)
      (keyup.enter)="submitValue(inputElementRef.value)"
      (keyup.escape)="sendCancel()"
      [ngClass]="{'error': title===''}">

    <button class="btn"
      [disabled]="title===''"
      (click)="submitValue(inputElementRef.value)">
      Save
    </button>
    <button *ngIf="editing"
      class="btn btn-red"
      (click)="sendCancel()">
      Cancel
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})


export class InputButtonUnitComponent implements OnInit {
  @Input() title = 'Hello World';
  @Input() editing = false;

  constructor() { }

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  @Output() cancel: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  submitValue(newTitle: string): void {
    if (newTitle === "")
      return;
    this.submit.emit(newTitle);
  }

  sendCancel(): void {
    this.cancel.emit();
  }

  onChangeInput(newTitle: string) {
    this.title = newTitle;
  }

}
