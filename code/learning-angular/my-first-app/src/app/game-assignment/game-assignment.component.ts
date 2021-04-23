import { Component } from '@angular/core';

@Component({
  selector: 'app-game-assignment',
  templateUrl: './game-assignment.component.html',
})
export class GameAssignmentComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onNumberEmitted(evt: number) {
    if (evt % 2 === 0) {
    this.evenNumbers.push(evt);
    } else {
      this.oddNumbers.push(evt);
    }
  }
}
