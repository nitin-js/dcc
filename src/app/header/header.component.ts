import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: any = [];

  ngOnInit(){
    this.menuItems = [
      {
        label: 'Home',
        routerLink: ['/home']
      },
      {
        label: 'About Us',
        routerLink: ['/about']
      },
      {
        label: 'Packages',
        routerLink: ['/packages']
      },
      {
        label: 'Contact Us',
      },
    ]
  }

}
