import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName='';
  newServerContent='';
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement, newServerContent:HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:newServerContent.value
    })
  }

  onAddBluePrint(nameInput:HTMLInputElement, newServerContent:HTMLInputElement){
     this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent:newServerContent.value
    })
  }

}
