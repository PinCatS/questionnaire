import { Action } from 'redux';
import * as AnswersActions from './answers.actions';

export interface AnswersState {
  answers: Object | null;
}

const initialState: AnswersState = { answers: null };

export const AnswersReducer = function (
  state: AnswersState = initialState,
  action: Action
): AnswersState {
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

export const getAnswers = (state: any): AnswersState => state.answers;
