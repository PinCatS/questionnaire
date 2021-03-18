import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.css'],
})
export class OutroComponent implements OnInit {
  constructor(private router: Router) {}

  showResults() {
    this.router.navigateByUrl('/results');
  }

  ngOnInit(): void {}
}
