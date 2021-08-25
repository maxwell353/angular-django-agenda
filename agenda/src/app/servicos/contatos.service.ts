import { Injectable } from '@angular/core';
import { AuxiliarCrud } from './util/auxiliar-crud';

// Componentes
import { HttpClient } from '@angular/common/http';

//Util
import { Constantes } from 'src/app/util/constantes';

@Injectable({
  providedIn: 'root'
})
export class ContatoService extends AuxiliarCrud {

  constructor(public http: HttpClient, public constantes: Constantes) { 
    super(http, constantes, 'contatos/');
  }
}
