import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { OutroComponent } from './outro/outro.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';

import { QUESTIONS } from './app.data';
import { Question } from './question.model';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

import { appStoreProviders } from './app.store';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionnaireComponent,
    OutroComponent,
    QuestionComponent,
    ResultsComponent,
    ProgressBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
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
    { provide: 'NUMBER_OF_QUESTIONS', useValue: QUESTIONS.length },
    appStoreProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
