import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
    h3{
      color:dodgerblue;
    }
  `]
})
export class AppComponent {
  serverElements=[{type:'server',name:'TestServer',content:'Just a test!'}];//assigning value through key and value pair

  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber=0;

  oddNumbers:number[]=[];
  evenNumbers:number[]=[];

  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }

  onBluePrintAdded(bluePrintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:bluePrintData.serverName,
      content:bluePrintData.serverContent
    })
  }

  onChangeFirst(){
    this.serverElements[0].name='changed';
  }

  onDestroyFirst(){
    this.serverElements.slice(0,1);
  }

  onIntervalFired(fireNumber:any){
    if (fireNumber%2===0) {
      this.evenNumbers.push(fireNumber);
    }
    else{
      this.oddNumbers.push(fireNumber);
    }
  }



  
}
