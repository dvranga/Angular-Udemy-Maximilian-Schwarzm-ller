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
  serverName='';

  serverCreationStatus='No server was created !';

  constructor() { 
    setTimeout(()=>{
        this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus='server was created';
  }


  onUpdateServerName(event:any){
    // this.serverName=event.target.value;
    this.serverName=(<HTMLInputElement>event.target).value;
    console.log(this.serverName)
  }

}
