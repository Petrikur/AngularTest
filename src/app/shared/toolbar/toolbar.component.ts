import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() theappname: string;
   
  constructor() { }

  ngOnInit(): void {
   // this.theappname = 'Default name';
  }

}
