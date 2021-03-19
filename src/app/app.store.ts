import { InjectionToken } from '@angular/core';
import { Store, createStore } from 'redux';
import { AppState } from './app.state';
import { answersReducer as reducer } from './answers/answers.reducer';

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
  return createStore(reducer);
}

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore },
];
