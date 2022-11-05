import { createReducer, on } from '@ngrx/store';
import * as taskActions from './task.actions';

export interface Task {
  name: string;
  description: string;
  isCompleted: boolean;
}
export interface TaskState {
  tasks: Task[]
  error: string | null
}

export const FEATURE_KEY = 'task';


const initialStateTask: TaskState = {
  tasks: [],
  error: null,
}
export const taskReducer = createReducer(initialStateTask,
  on(taskActions.addTaskSuccess, (state) => {
    return {
      ...state,
      tasks: [...state.tasks,{
        name: 'Sacar el perro',
        description: 'Salir a pasear con toby',
        isCompleted: false
      }]
    }
  })
)
