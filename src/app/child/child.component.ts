import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() 
  newItemEvent = new EventEmitter<string>();

  @Input()
  uname = '';

    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }
  }