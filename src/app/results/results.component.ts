import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState, getAnswers, getUser } from '../app.reducer';
import { QUESTIONS } from '../app.data';
import { Question } from '../question.model';
import { User } from '../user/user.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  answers: any;
  user!: User | null;

  constructor(
    @Inject(QUESTIONS) public questions: Question[],
    @Inject(AppStore) private store: Store<AppState>
  ) {}

  getAnswer(id: number): string {
    return this.answers[id];
  }

  readState() {
    const state = this.store.getState();
    const answers = getAnswers(state);
    console.log(answers);
  }

  ngOnInit(): void {
    const state = this.store.getState();
    this.answers = getAnswers(state);
    this.user = getUser(state).user;
    console.log(this.user, this.answers);
  }
}
