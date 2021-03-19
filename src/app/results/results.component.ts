import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.state';
import * as AnswersActions from '../answers/answers.actions';
import { QUESTIONS } from '../app.data';
import { Question } from '../question.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  answers: any;

  constructor(
    @Inject(QUESTIONS) public questions: Question[],
    @Inject(AppStore) private store: Store<AppState>
  ) {
    this.answers = this.getAnswers();
  }

  getAnswers(): Object {
    const state: AppState = this.store.getState() as AppState;
    console.log(state.answers);
    return state.answers;
  }

  getAnswer(id: number): string {
    return this.answers[id];
  }

  ngOnInit(): void {}
}
