import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  @Input() currentQuestionId!: number;
  questionsRange: number[];

  constructor(@Inject('NUMBER_OF_QUESTIONS') public numberOfQuestions: number) {
    this.questionsRange = Array(this.numberOfQuestions)
      .fill(0)
      .map((item, i) => i + 1);
  }

  isActive(id: number): boolean {
    return true;
  }

  ngOnInit(): void {}
}
