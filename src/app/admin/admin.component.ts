import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  toogle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleSide() {
    this.toogle = !this.toogle;
  }

}
