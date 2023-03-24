import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state/AppState';

export const selectFeature = createFeatureSelector<AppState>('myReducer');


export const selectCount = createSelector(
  selectFeature,
  (state: AppState) => state.count  
);
