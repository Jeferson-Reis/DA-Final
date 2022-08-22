import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'models/usuario.model';
import { observable, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
    private httpClient: HttpClient) { }

  fazerCadastro(usuario: any): Observable<HttpResponse<any>> {
    console.log('FOI',usuario);
    return this.httpClient.post("http://localhost:8080/user/signup",
      usuario,
      { observe: 'response' }
    ).pipe(
      tap((a) => console.log('FOI',a))
    );
  }
}
