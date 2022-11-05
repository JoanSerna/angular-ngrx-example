import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from './app.service';
import * as counterActions from './app.actions';
import { catchError, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterEffects {
  increaseCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.increaseCounter),
      switchMap(() => of(counterActions.increaseCounterSuccess({amount: 1}))),
      catchError((error) => of(counterActions.increaseCounterFailed({error: error.message}))),
    ),
  )
  decreaseCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.decreaseCounter),
      switchMap(() => of(counterActions.decreaseCounterSuccess({amount: 1}))),
      catchError((error) => of(counterActions.decreaseCounterFailed({error: error.message}))),
    ),
  )

  constructor(
    private actions$: Actions,
    private appService: AppService,
  ) {
  }
}
