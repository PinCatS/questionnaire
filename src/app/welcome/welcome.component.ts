import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState } from '../app.reducer';
import * as UserActions from '../user/user.actions';
import { User } from '../user/user.model';

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
    this.store.dispatch(UserActions.setUser(user));

    this.router.navigateByUrl('/questions');
  }

  ngOnInit(): void {}
}
