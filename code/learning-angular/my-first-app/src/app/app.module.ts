import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameAssignmentComponent } from './game-assignment/game-assignment.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { FormsComponent } from './forms/forms.component';
import { FormsProgrammaticComponent } from './forms-programmatic/forms-programmatic.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GameAssignmentComponent,
    UsersComponent,
    UserComponent,
    UserEventsComponent,
    FormsComponent,
    FormsProgrammaticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
