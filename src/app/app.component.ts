import { Component } from '@angular/core';
import { AppFacade } from './store/app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    public appFacade: AppFacade,
  ) {
  }
}
