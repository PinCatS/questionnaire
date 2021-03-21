import { Reducer, combineReducers } from 'redux';
import { UserState, UserReducer } from './user/user.reducer';
import { AnswersState, AnswersReducer } from './answers/answers.reducer';

export * from './user/user.reducer';
export * from './answers/answers.reducer';

export interface AppState {
  user: UserState;
  answers: AnswersState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  user: UserReducer,
  answers: AnswersReducer,
});

export default rootReducer;
