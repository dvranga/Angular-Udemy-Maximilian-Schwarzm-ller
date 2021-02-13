import { Component } from '@angular/core';

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

  
}
