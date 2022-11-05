import { createReducer, on } from '@ngrx/store';
import * as counterActions from './app.actions';

export interface CounterState {
  count: number;
  increaseClicks: number;
  decreaseClicks: number;
  error: string | null
}

const initialState: CounterState = {
  count: 0,
  increaseClicks: 0,
  decreaseClicks: 0,
  error: null,
}
export const counterReducer = createReducer(initialState,
  on(counterActions.increaseCounterSuccess, (state, action) => {
    return {
      ...state,
      count: state.count + action.amount,
      increaseClicks: state.increaseClicks + 1,
    }
  }),
  on(counterActions.increaseCounterFailed, (state, action) => {
    return {
      ...state,
      error: action.error,
    }
  }),
  on(counterActions.decreaseCounterSuccess, (state, action) => {
    return {
      ...state,
      count: state.count - action.amount,
      decreaseClicks: state.decreaseClicks + 1,
    }
  }),
)
