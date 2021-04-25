import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent {
  public userEvents: string[] = [];

  constructor(private userService: UsersService) {
    this.userService.onUserAdded.subscribe((userName: string) => this.userEvents.push(userName));
  }
}
