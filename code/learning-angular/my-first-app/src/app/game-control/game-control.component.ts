import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  private gameInterval?: any;
  @Output('numberEmitted') public onTick = new EventEmitter<number>();
  public count: number = 0;

  onGameStart() {
    this.gameInterval = setInterval(this.emitEvent.bind(this), 1000)
  }

  onGameEnd() {
    clearInterval(this.gameInterval);
    this.gameInterval = undefined;
  }

  emitEvent() {
    this.count += 1;
    this.onTick.emit(this.count);
  }
}
