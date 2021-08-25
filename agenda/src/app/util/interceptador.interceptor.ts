import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//Serviços
import { AutenticacaoService } from '../servicos/autenticacao.service';

@Injectable()
export class InterceptadorRequest implements HttpInterceptor {

  constructor(
    private autenticacaoService: AutenticacaoService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const usuario = this.autenticacaoService.currentUserValue;
    if(usuario && usuario.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${usuario.token}`
        }
      })
    }
    return next.handle(request);
  }
}
