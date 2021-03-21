import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { AppStore } from '../app.store';
import { AppState, getUser } from '../app.reducer';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.css'],
})
export class OutroComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(AppStore) private store: Store<AppState>
  ) {}

  showResults() {
    this.router.navigateByUrl('/results');
  }

  ngOnInit(): void {
    const state = this.store.getState();
    if (!getUser(state).user) {
      this.router.navigateByUrl('/');
    }
  }
}
