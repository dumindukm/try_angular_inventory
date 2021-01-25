import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    secure
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class SecureLayoutComponent {}