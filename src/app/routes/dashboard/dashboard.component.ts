import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items:any ;

  constructor() { }

  ngOnInit(): void {
    this.items = [{sno: '1'},{sno: '2'},{sno: '3'},{sno: '4'},{sno: '5'},{sno: '6'},
    {sno: '7'},{sno: '8'},{sno: '9'},{sno: '10'},{sno: '11'},{sno: '12'}];
  }

}
