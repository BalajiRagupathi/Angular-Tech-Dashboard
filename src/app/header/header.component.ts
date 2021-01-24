import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  sidebar: Boolean;

  ngOnInit(): void {
    this.sidebar = false;
  }

  sidebarStateChange() {
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  }
}
