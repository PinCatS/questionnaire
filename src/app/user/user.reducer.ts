import { Action } from 'redux';
import { User } from './user.model';
import * as UserActions from './user.actions';

export interface UserState {
  user: User | null;
}

const initialState: UserState = { user: null };

export const UserReducer = function (
  state: UserState = initialState,
  action: Action
): UserState {
  switch (action.type) {
    case UserActions.SET_USER:
      const user: User = (<UserActions.SetUserAction>action).user;
      return {
        user: user,
      };
    default:
      return state;
  }
};

export const getUser = (state: any): UserState => state.user;
