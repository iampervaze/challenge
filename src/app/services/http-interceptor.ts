import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handle(request, next));
  }

  async handle(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${''}`
      }
    });

    // Important: Note the .toPromise()
    return next.handle(authReq).toPromise();
  }
}
