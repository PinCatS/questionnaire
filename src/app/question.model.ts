export class Question {
  id: number;
  question: string;
  answerType: string;
  answers: string[] | null;

  constructor(
    id: number,
    question: string,
    answerType: string,
    answers: string[] | null
  ) {
    this.id = id;
    this.question = question;
    this.answerType = answerType;
    this.answers = answers;
  }

  getTitle(): string {
    return `${this.id}. ${this.question}`;
  }
}
