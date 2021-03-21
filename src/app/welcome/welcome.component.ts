import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.reducer';
import * as UserActions from '../user/user.actions';
import { User } from '../user/user.model';

/**
 * TODO:
 * 7. Redirect to welcome in case !isStarted and user navigated via link
 * 8. When user reached results, set isStarted to false
 * 9. Make progress bar clickable
 * 10. Let users navigate and update the answer
 * 11. Add more 2 questions
 * 12. Add list of questions to the store
 * 13. Split questionnaire into smaller components
 */

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  userName!: string;
  mail!: string;

  constructor(
    private router: Router,
    @Inject(AppStore) private store: Store<AppState>
  ) {}

  onSubmit(value: any) {
    const user: User = new User(value['user-name'], value['mail']);
    console.log(user);
    this.store.dispatch(UserActions.setUser(user));

    this.router.navigateByUrl('/questions');
  }

  ngOnInit(): void {}
}
