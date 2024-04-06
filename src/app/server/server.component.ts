import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  isServer = false;

  getServerStatus() {
    return this.serverStatus;
  }

  addServer() {
    return this.isServer === false
      ? (this.isServer = true)
      : (this.isServer = false);
  }
}
