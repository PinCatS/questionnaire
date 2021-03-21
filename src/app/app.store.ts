import { InjectionToken } from '@angular/core';
import { Store, createStore } from 'redux';
import { AppState, default as reducer } from './app.reducer';

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
  return createStore(reducer);
}

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore },
];
