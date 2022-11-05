import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY, TaskState } from './task.reducer';
import { AppState } from '../../store';


// export const selectCounter = (state: AppState) => state.counter;
export const selectTask = createFeatureSelector<AppState,TaskState>(FEATURE_KEY)
export const getTasks = createSelector(selectTask, state => state.tasks)
