import { Component, OnInit } from '@angular/core';

//Serviços
import { ContatoService } from 'src/app/servicos/contatos.service';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

//Plugin
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private contatosService: ContatoService,
    private autenticacaoService: AutenticacaoService,
    private loading: NgxSpinnerService
  ) { }

  public contatos: [] = [];

  ngOnInit(): void {
    this.pesquisarContatos();
  }

  async pesquisarContatos() {
    this.loading.show();
    await this.contatosService.pesquisar().then( async (retorno: any) => {
      this.contatos = retorno;
    }).finally(() => {
      this.loading.hide();
    });
  }

  logout() {
    this.autenticacaoService.logout();
  }

}
