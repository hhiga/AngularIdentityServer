import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AccountService } from '../services/account.service';

@Injectable()

export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.accountService.getUser())
          .pipe(
            switchMap(user => {
              if (user && user.access_token) {
                request = request.clone({
                  setHeaders: {
                    Authorization: `${user.token_type} ${user.access_token}`
                  }
                });
              }
              return next.handle(request);
            })
          );
        }
}
