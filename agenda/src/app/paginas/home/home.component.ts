import { Component, OnInit } from '@angular/core';

//Serviços
import { ContatoService } from 'src/app/servicos/contatos.service';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private contatosService: ContatoService,
    private autenticacaoService: AutenticacaoService
  ) { }

  public contatos: [] = [];

  ngOnInit(): void {
    this.pesquisarContatos();
  }

  async pesquisarContatos() {
    await this.contatosService.pesquisar().then( async (retorno: any) => {
      this.contatos = retorno;
    });
  }

  logout() {
    this.autenticacaoService.logout();
  }

}
