import { Action, ActionCreator } from 'redux';

export interface AddAnswerAction extends Action {
  answer: string;
  questionId: number;
}

export const ADD_ANSWER: string = 'ADD_ANSWER';
export const addAnswer: ActionCreator<AddAnswerAction> = (
  questionId,
  answer
) => ({
  type: ADD_ANSWER,
  questionId,
  answer,
});
