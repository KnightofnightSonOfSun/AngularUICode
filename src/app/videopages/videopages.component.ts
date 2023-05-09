import { Component } from '@angular/core';

import { MENU_ITEMS } from './videopages-menu';

@Component({
  selector: 'ngx-video-pages',
  styleUrls: ['videopages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class VideoPagesComponent {

  menu = MENU_ITEMS; 
}
