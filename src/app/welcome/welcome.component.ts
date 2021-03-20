import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * TODO:
 * 1. Save user information and start in the store
 * 2. Make fields required
 * 3. Check input errors
 * 4. Disable submit button and show errors
 * 5. Show name in outro and in Results
 * 6. Redirect to welcome in case !isStarted and user navigated via link
 * 7. When user reached results, set isStarted to false
 * 8. Make progress bar clickable
 * 9. Let users navigate and update the answer
 * 10. Add more 2 questions
 * 11. Add list of questions to the store
 * 12. Split questionnaire into smaller components
 */

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  isStarted: boolean;
  userName!: string;
  mail!: string;

  constructor(private router: Router) {
    this.isStarted = false;
  }

  onSubmit(value: any) {
    this.isStarted = true;
    this.userName = value['user-name'];
    this.mail = value['mail'];
    console.log(this.isStarted, this.userName, this.mail);
    this.router.navigateByUrl('/questions');
  }

  ngOnInit(): void {}
}
