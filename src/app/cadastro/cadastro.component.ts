import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { CadastroService } from './cadastro.service';
import { Usuario} from '../../../models/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario = "";
  nomeCompleto = "";
  email = "";
  senha = "";
  senha2 = "";

  constructor(
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {
  }

  cadastrar = async () => {
    console.log('cliquei')



    const usuario= {
      email: this.email,
      name: this.usuario,
      password: this.senha,
      full_name: this.nomeCompleto,
    }

    this.cadastroService.fazerCadastro(usuario);
    console.log(`${usuario} foi`)


  }
}