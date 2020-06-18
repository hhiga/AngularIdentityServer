import { Component, OnInit } from '@angular/core';
import { AccountService } from '../core/services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }
  login() {
    this.accountService.login();
  }
}
