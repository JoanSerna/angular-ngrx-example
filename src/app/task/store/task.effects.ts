import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as taskActions from './task.actions';
import { catchError, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskEffects {
  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.addTask),
      switchMap(() => of(taskActions.addTaskSuccess())),
      catchError(() => of(taskActions.addTaskFailed())),
    ),
  )

  constructor(
    private actions$: Actions,
  ) {
  }
}
