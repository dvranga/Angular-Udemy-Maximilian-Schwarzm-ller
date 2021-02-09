import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{

    serverId:number=10;
    serverStatus:string='offLine';

    getServerStatus(){
       return this.serverStatus;
    }

    constructor(){
        this.serverStatus=Math.random()>0.5? 'offLine':'onLine';
    }

    getColor(){
        return this.serverStatus === 'onLine'?'green':'red';
    }
}