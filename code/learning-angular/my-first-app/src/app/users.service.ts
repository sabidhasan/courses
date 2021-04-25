import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: User[] = [];
  public onUserAdded = new EventEmitter<string>();

  public createUser(name: string, email: string) {
    this.users.push({ name, email });
  }
}
