import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
})
export class EvenComponent {
  @Input('number') number: number;
  constructor() { }
}
