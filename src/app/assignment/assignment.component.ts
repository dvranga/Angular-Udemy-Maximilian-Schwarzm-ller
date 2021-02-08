import { Component, OnInit } from "@angular/core";

@Component({
    selector:'.app-assignment',
    templateUrl:'./assignment.component.html',
    // template:'<app-assignment2><app-assignment2>',
    // styleUrls:['./assignment.component.css']
    styles:[`
        h3{
            color:red;
        }
    `]
})
export class AssignmentComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }