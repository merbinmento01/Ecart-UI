import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  sideList:any;
  toogle: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.sideList = [
      {label:'Menu', icon: 'bi bi-menu-button-wide'},
      {label:'Dashboard', icon: 'bi bi-grid-fill'},
      {label:'Whislist', icon: 'bi bi-bag-heart'},
      {label:'Orders', icon: 'bi bi-basket3'},
      {label:'Address', icon: 'bi bi-bullseye'},
      {label:'Account', icon: 'bi bi-person-circle'},
      {label:'About', icon: 'bi bi-journal-text'},
      {label:'Logout', icon: 'bi bi-power', route: 'logout'},
    ]
  }

  route( route: string) {
    if (route === 'logout') {
      this.authService.logOut();
    }
  }

}
