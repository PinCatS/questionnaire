import { Reducer, Action } from 'redux';
import { AppState } from '../app.state';
import * as AnswersActions from './answers.actions';

const initialState: AppState = { answers: {} };

export const answersReducer: Reducer<AppState> = (
  state: AppState = initialState,
  action: Action
): AppState => {
  switch (action.type) {
    case AnswersActions.ADD_ANSWER:
      const answer: string = (<AnswersActions.AddAnswerAction>action).answer;
      const questionId: number = (<AnswersActions.AddAnswerAction>action)
        .questionId;
      return Object.assign({}, state, {
        answers: { ...state.answers, [questionId]: answer },
      });
    default:
      return state;
  }
};
