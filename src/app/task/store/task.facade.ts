import { Injectable } from '@angular/core';
import * as taskActions from './task.actions';
import * as fromTask from './task.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Injectable({
  providedIn: 'root',
})
export class TaskFacade {
  tasks$ = this.store.select(fromTask.getTasks)

  constructor(
    private store: Store<AppState>,
  ) {
  }

  addTasks() {
    this.store.dispatch(taskActions.addTask())
  }
}
