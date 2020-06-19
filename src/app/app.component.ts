import { Component, OnInit } from '@angular/core';
import { AccountService, User } from './core/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp';
  currentUser: User;

  constructor(private accountService: AccountService) {
    this.accountService.user$.subscribe(user => this.currentUser = user);
  }

  ngOnInit(): void {
  }

}
