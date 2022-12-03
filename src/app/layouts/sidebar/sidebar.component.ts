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
      {label:'Dashboard', icon: 'bi bi-grid-fill', routePath: 'dashboard'},
      {label:'Whislist', icon: 'bi bi-bag-heart', routePath: 'wishList'},
      {label:'Orders', icon: 'bi bi-basket3', routePath: 'orders'},
      {label:'Chat', icon: 'bi bi-chat-left', routePath: 'chat'},
      {label:'Address', icon: 'bi bi-bullseye', routePath: 'settings'},
      {label:'Account', icon: 'bi bi-person-circle', routePath: 'settings'},
      {label:'About', icon: 'bi bi-journal-text', routePath: 'about'},
      {label:'Logout', icon: 'bi bi-power', route: 'logout', routePath: ''},
    ]
  }

  route( route: string) {
    if (route === 'logout') {
      this.authService.logOut();
    }
  }

}
