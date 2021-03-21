import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.reducer';
import * as AnswersActions from '../answers/answers.actions';
import { QUESTIONS } from '../app.data';
import { Question } from '../question.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  private currentQuestionIdx: number;
  public question: Question;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(QUESTIONS) private questions: Question[],
    @Inject(AppStore) private store: Store<AppState>
  ) {
    this.currentQuestionIdx = 0;
    this.question = this.questions[this.currentQuestionIdx];
  }

  onSubmit(value: any) {
    const answer =
      this.question.answerType == 'options'
        ? this.convertAnswerToString(value)
        : value['choice'];

    this.store.dispatch(AnswersActions.addAnswer(this.question.id, answer));

    this.nextQuestion();
  }

  private convertAnswerToString(value: any): string {
    let answers = [];
    for (let [option, isSelected] of Object.entries(value)) {
      if (isSelected) answers.push(option);
    }

    return answers.join(', ');
  }

  private nextQuestion() {
    if (this.currentQuestionIdx < this.questions.length - 1) {
      this.currentQuestionIdx++;
      this.question = this.questions[this.currentQuestionIdx];
    } else {
      this.router.navigateByUrl(`/outro`);
    }
  }

  isEnd(): boolean {
    return this.currentQuestionIdx >= this.questions.length;
  }

  ngOnInit(): void {}
}
