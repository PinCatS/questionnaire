import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * TODO:
 * 1. Style user input
 * 2. Save user information and start in the store
 * 3. Make fields required
 * 4. Check input errors
 * 5. Disable submit button and show errors
 * 6. Show name in outro and in Results
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
