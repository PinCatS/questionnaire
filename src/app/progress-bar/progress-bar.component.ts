import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  @Input() count!: number;

  constructor(
    @Inject('NUMBER_OF_QUESTIONS') public numberOfQuestions: number
  ) {}

  ngOnInit(): void {}
}
