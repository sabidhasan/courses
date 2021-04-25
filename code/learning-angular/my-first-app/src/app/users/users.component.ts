import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.users;
  }

  public addUser() {
    const name = this.getRandomString()
    this.usersService.createUser(name, this.getRandomString());
    this.usersService.onUserAdded.emit(name);
  }

  private getRandomString(): string {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }
}
