import { createAction } from '@ngrx/store';

export const addTask = createAction(
  '[TASK] create task',
);
export const addTaskSuccess = createAction(
  '[TASK] create task success',
);
export const addTaskFailed = createAction(
  '[TASK] create task failed',
);
