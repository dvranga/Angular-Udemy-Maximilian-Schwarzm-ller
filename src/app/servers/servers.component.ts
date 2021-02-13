import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
  // styles:[`
  //       h3{
  //           color:red;
  //       }
  //   `]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName='TestServerName';
  userName='';
  serverCreated=false;
  servers=['TestServer', 'TestServer 2'];
  details=['Secret password is = Tuna'];
  show=false;
  count=0;
  color='red';
  showSecrect=false;

  log=[];

  serverCreationStatus='No server was created !';

  constructor() { 
    setTimeout(()=>{
        this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName)
    this.serverCreationStatus='server was created! Name is '+this.serverName;
  }


  onUpdateServerName(event:any){
    // this.serverName=event.target.value;
    this.serverName=(<HTMLInputElement>event.target).value;
    console.log(this.serverName)
  }

  Reset(){
    return this.userName='';
  }

  getDisplayDetails(){
    this.show=true;
    this.details.push(this.serverName);
    this.count=this.count+1
  }

  getColor(){
    if (this.count>5) {
      return 'green';
    }
  }

  getCSSColor(){
    if (this.count>5) {
      console.log(this.count)
      return 'white';
    }
  }

  onToggleDetails(){
    this.showSecrect=!this.showSecrect;
    // this.log.push(this.log.length+1);
    this.log.push(new Date());
  }
}
