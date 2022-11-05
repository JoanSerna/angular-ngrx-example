import { Injectable } from '@angular/core';
import * as counterActions from './app.actions';
import * as fromCounter from './app.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../store';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  count$ = this.store.select(fromCounter.getCount)
  increaseClicks$ = this.store.select(fromCounter.getIncreaseClicks)
  decreaseClicks$ = this.store.select(fromCounter.getDecreaseClicks)

  constructor(
    private store: Store<AppState>,
  ) {
  }

  increaseCounter() {
    this.store.dispatch(counterActions.increaseCounter())
  }

  decreaseCounter() {
    this.store.dispatch(counterActions.decreaseCounter())
  }
}
