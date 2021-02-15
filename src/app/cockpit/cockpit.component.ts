import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName='';
  // newServerContent='';

  @ViewChild('serverContentInput', {static: true}) serverContentInput:ElementRef;

  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }

  onAddBluePrint(nameInput:HTMLInputElement){
      this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })
  }

}
