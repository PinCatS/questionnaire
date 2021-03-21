import { Action, ActionCreator } from 'redux';
import { User } from './user.model';

export interface SetUserAction extends Action {
  user: User;
}

export const SET_USER: string = 'ADD_USER';
export const setUser: ActionCreator<SetUserAction> = (user) => ({
  type: SET_USER,
  user,
});
