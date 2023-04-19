import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers: any[] = ['TestServer1', 'TestServer2'] ;

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created. Name of the server is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
