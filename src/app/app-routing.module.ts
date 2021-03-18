import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { OutroComponent } from './outro/outro.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'questions', component: QuestionnaireComponent },
  { path: 'outro', component: OutroComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
