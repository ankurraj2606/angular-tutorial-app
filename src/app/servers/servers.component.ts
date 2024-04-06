import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // selector: '[app-servers]',
  // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreated = false;
  serverName = '';
  serverCreationStatus = 'No server created!';
  inputText = '';
  textEntered = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus =
      'server has been created!. The new server name is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  addText() {
    this.textEntered = true;
  }
}
