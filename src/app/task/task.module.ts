import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './store/task.effects';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY, taskReducer } from './store/task.reducer';


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    StoreModule.forFeature(FEATURE_KEY, taskReducer),
    EffectsModule.forFeature([TaskEffects])
  ]
})
export class TaskModule { }
