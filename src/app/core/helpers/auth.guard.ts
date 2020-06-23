import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        const isAuthenticated = this.accountService.getUser().then(user => {
            const isValidUser = user != null && !user.expired;
            if (!isValidUser) {
                this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
            }
            return isValidUser;
        });
        return isAuthenticated;
    }
}
