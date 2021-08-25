import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

//Serviços
import { ContatoService } from 'src/app/servicos/contatos.service';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

//Util
import { Acao } from 'src/app/util/acao';

//Plugin
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, Acao {

  public contatos: [] = [];
  
  public contatoForm = new FormGroup({
    nome: new FormControl(),
    telefone: new FormControl(),
    celular: new FormControl()
  });

  public submitted = false;

  constructor(
    private contatosService: ContatoService,
    private autenticacaoService: AutenticacaoService,
    private loading: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private modal: NgbModal,
  ) { }

  async pesquisar() {
    this.contatosService.pesquisar().then(async (retorno: any) => {
      this.contatos = retorno;
    });
  }
  adicionar() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      celular: ['', Validators.required]
    });
  }
  async editar(id: number) {
    this.contatosService.pesquisar(id).then(async (retorno: any) => {
      this.contatoForm = this.formBuilder.group({
        id: [retorno.id],
        nome: [retorno.nome, Validators.required],
        telefone: [retorno.telefone, Validators.required],
        celular: [retorno.celular, Validators.required]
      });
    })
  }
  remover(id: number) {
    this.contatosService.remover(id).then(async () => {
      this.pesquisar();
    });
  }

  openBackDropCustomClass(content: any) {
    this.modal.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  get f() { return this.contatoForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.contatoForm.invalid) {
      return;
    }

    this.loading.show();
    if (this.contatoForm.controls.id) {
      this.contatosService.atualizar(this.contatoForm.value).then((data: any) => {
        this.pesquisar();
        this.modal.dismissAll();
        this.loading.hide();
      }).catch((error) => {
        if(error.error.nome){
          alert("Erro: "+ error.error.nome[0]);
        } else if (error.error.telefone) {
          alert("Erro: "+ error.error.telefone[0]);
        } else if(error.error.celular) {
          alert("Erro: "+ error.error.celular[0]);
        } else {
          alert("Erro: Desconhecido");
        }
        this.loading.hide();
      }).finally(() => { this.submitted = false; });
    } else {
      this.contatosService.adicionar(this.contatoForm.value).then((data: any) => {
        this.pesquisar();
        this.modal.dismissAll();
        this.loading.hide();
      }).catch((error) => {
        if(error.error.nome){
          alert("Erro: "+ error.error.nome[0]);
        } else if (error.error.telefone) {
          alert("Erro: "+ error.error.telefone[0]);
        } else if(error.error.celular) {
          alert("Erro: "+ error.error.celular[0]);
        } else {
          alert("Erro: Desconhecido");
        }
        this.loading.hide();
      }).finally(() => { this.submitted = false; });
    }
    
  }

  logout() {
    this.autenticacaoService.logout();
  }

}
