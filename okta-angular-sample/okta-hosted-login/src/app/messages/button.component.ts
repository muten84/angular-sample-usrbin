import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-miobottone',
    template: `
      <button (click)="onClickMe()">{{buttonStatus}}</button>
      {{clickMessage}}`
  })
  export class ClickMeComponent {
    clickMessage = '';

    @Output('clickEvent')
    emitter = new EventEmitter();

    @Input()
    buttonStatus: String;
    
    count = 0;

  
    onClickMe() {
      this.clickMessage = 'This is a msg example';
      this.count++;
      this.emitter.emit(""+this.count);
    }
  }