import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { OutroComponent } from './outro/outro.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';

import { QUESTIONS } from './app.data';
import { Question } from './question.model';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionnaireComponent,
    OutroComponent,
    QuestionComponent,
    ResultsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: QUESTIONS,

      useFactory() {
        return QUESTIONS.map((item) => {
          return new Question(
            item.id,
            item.question,
            item.answer.type,
            item.answer.options
          );
        });
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
