import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <server></server>
  //   <strong>Hello</strong>
  //   <server></server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  username = ""
  buttonDisabled = true;

  constructor() { 
    this.buttonDisabled = this.username == "";
  }

  ngOnInit(): void {
  }

  onTextChange(event: InputEvent) {
    // this.buttonDisabled = 
    this.buttonDisabled = !(<HTMLInputElement>event.target).value.length;
  }

  onClick() {
    this.username = "";
  }

}
