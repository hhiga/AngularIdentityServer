import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        const isAuthenticated = this.accountService.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
        }
        return isAuthenticated;
    }
}
