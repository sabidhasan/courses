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
  showSecret = false;
  toggleClickTimes = [];

  constructor() { 
    this.buttonDisabled = this.username == "";
  }

  onDisplayClick() {
    this.showSecret = !this.showSecret;
    this.toggleClickTimes.push(+new Date())
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

  getParaStyle(i: number) {
    return i >= 5 ? { background: 'blue' } : {}
  }
}
