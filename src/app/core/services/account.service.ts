import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private manager: UserManager;
  private user: User | null;

  constructor(private httpClient: HttpClient) {
    this.manager = new UserManager(
      {
        authority: 'https://localhost:44397/',
        client_id: 'angular-app',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200',
        response_type: 'code',
        scope: 'WeatherApi openid profile',
        response_mode: 'query'
      });
    this.manager.getUser().then(user => this.user = user);
   }

   public getUser(): Promise<User> {
     return this.manager.getUser();
   }

   public login(): Promise<void> {
     return this.manager.signinRedirect();
   }

   public renetToken(): Promise<User> {
     return this.manager.signinSilent();
   }

   public logout(): Promise<void> {
     return this.manager.signoutRedirect();
   }

   public async completeAuthentication() {
     this.user = await this.manager.signinRedirectCallback();
   }

   public isAuthenticated(): boolean {
     return this.user != null && !this.user.expired;
   }
}

