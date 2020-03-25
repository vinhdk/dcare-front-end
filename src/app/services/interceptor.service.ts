import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = ""
      ? request.clone({
          reportProgress: true,
          setHeaders: {
            authorization: `${JSON.stringify("")}`
          }
        })
      : request.clone({ reportProgress: true });
    return next.handle(request).pipe(
      tap((err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          if (err.status === 401) {
            this.router.navigate(["auth/login"]);
          }
        }
      }),
      finalize(() => {})
    );
  }
}
