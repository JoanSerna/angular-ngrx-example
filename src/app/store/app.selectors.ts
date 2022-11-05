import { createSelector } from '@ngrx/store';
import { AppState } from '../store';


export const selectCounter = (state: AppState) => state.counter;

export const getIncreaseClicks = createSelector(selectCounter, state => state.increaseClicks)
export const getDecreaseClicks = createSelector(selectCounter, state => state.decreaseClicks)
export const getCount = createSelector(selectCounter, state => state.count)
