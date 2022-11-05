import { CounterState } from './store/app.reducer';
import { TaskState } from './task/store/task.reducer';

export interface AppState {
  counter: CounterState;
  task: TaskState;
}
