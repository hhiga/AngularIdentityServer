import { Component, OnInit } from '@angular/core';
import { AccountService } from '../core/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  error: boolean;

  constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    if (this.route.snapshot.fragment && this.route.snapshot.fragment.indexOf('error') >= 0) {
      this.error = true;
      return;
    }
    await this.accountService.completeAuthentication();
    this.router.navigate(['/home']);
  }

}
