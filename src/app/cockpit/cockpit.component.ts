import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName='';
  newServerContent='';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    // this.serverElement.push({
      // type:'server',
      // name:this.newServerName,
      // content:this.newServerContent
    // })
  }

  onAddBluePrint(){
    // this.serverElement.push({
      // type:'blueprint',
      // name:this.newServerName,
      // content:this.newServerContent
    // })
  }

}
