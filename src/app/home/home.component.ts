// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   h1Style: boolean = false;

//   constructor() { }

//   ngOnInit(): void {
//   }

//   firstClick() {
//     // console.log('clicked');
//     // this.h1Style = true;
//     this.h1Style = !this.h1Style;
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   h1Style: boolean = false;

//   constructor(private data: DataService) { }

//   ngOnInit(): void {
//   }

//   firstClick() {
//     //call function on dataService not self calling.
//     //misname same name as "firstClick" for both side.
//     this.data.firstClick();  
//   }
// }


import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any;
  
  constructor(private data: DataService) { }

  // ngOnInit(): void {
  //   this.data.getUsers().subscribe(data => {
  //     this.users = data
  //     console.log(this.users);
  //     }
  //   );
  // }
  ngOnInit(){
    this.getUserList();
  }

  getUserList() {
    this.data
    .getUsers()
    .subscribe((data:any) => {
      this.users = data;
      console.log(this.users);
    });
  }
  // firstClick() {
  //   //call function on dataService not self calling.
  //   //misname same name as "firstClick" for both side.
  //   this.data.firstClick();  
  // }

}
