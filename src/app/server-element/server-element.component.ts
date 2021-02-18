import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element:{type:string,content:string,name:string};
  @Input() name:string;
  @ViewChild('heading',{static:true}) header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() {
    console.log("Constructor called. ");
   }

   ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges Called");
  }

  ngOnInit(): void {
    console.log("ngOnInIt Called");
    console.log("textContent ",this.header.nativeElement.textContent)
    console.log('Text content of paragraph ',this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log("ngDoCheck called !");
  }

  ngAfterContentInit(){
    console.log("NgAfterContentInit Called");
    console.log('Text content of paragraph ',this.paragraph.nativeElement.textContent)
  }
 
  ngAfterContentChecked(){
    console.log("NgAfterContentChecked Called");
  }

  ngAfterViewInit(){
    console.log("NgAfterViewInit Called");
    console.log("textContent ",this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log("NgAfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("NgOnDestory Called");
  }

}
