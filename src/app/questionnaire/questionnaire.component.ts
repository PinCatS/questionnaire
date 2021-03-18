import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QUESTIONS } from '../app.data';
import { Question } from '../question.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  private currentQuestionIdx: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(QUESTIONS) private questions: Question[]
  ) {
    this.currentQuestionIdx = 0;
  }

  nextQuestion() {
    if (this.currentQuestionIdx < this.questions.length - 1) {
      this.currentQuestionIdx++;
    } else {
      this.router.navigateByUrl(`/outro`);
    }
  }

  isEnd(): boolean {
    return this.currentQuestionIdx >= this.questions.length;
  }

  getCurrentQuestion(): Question {
    console.log(this.questions[this.currentQuestionIdx]);
    return this.questions[this.currentQuestionIdx];
  }

  ngOnInit(): void {}
}
