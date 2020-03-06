import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  ////ts style:
  appTitle: string = 'myapp'; 
  ////js style: 
  // appTitle = 'myApp';

  constructor() { }

  ngOnInit(): void {
  }

}
