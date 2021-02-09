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

  constructor() { 
    setTimeout(()=>{
        this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

}
