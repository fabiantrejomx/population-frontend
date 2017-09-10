import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html'
})
export class Dashboard {
  config: any;
  month: any;
  year: any;

  constructor() {
  }

}
