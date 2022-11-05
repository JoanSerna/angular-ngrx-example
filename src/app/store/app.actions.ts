import { createAction, props } from '@ngrx/store';

export const increaseCounter = createAction(
  '[COUNTER] increase counter',
);

export const increaseCounterSuccess = createAction(
  '[COUNTER] increase counter success', props<{ amount: number }>(),
);

export const increaseCounterFailed = createAction(
  '[COUNTER] increase counter failed', props<{ error: string }>(),
);

export const decreaseCounter = createAction(
  '[COUNTER] decrease counter',
);
export const decreaseCounterSuccess = createAction(
  '[COUNTER] decrease counter success', props<{ amount: number }>(),
);
export const decreaseCounterFailed = createAction(
  '[COUNTER] decrease counter failed', props<{ error: string }>(),
);
