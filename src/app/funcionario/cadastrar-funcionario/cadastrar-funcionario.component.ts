import { DepartamentoService } from './../../departamento/departamento.service';
import { Departamento } from './../../models/Departamento';
import { Funcionario } from './../../models/Funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FuncionarioService } from '../funcionario.service';
import { DepartamentoDTO } from '../../models/DepartamentoDTO';


@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  funcionario: Funcionario = new Funcionario()
  id: number
  dep: DepartamentoDTO
  departamentos: DepartamentoDTO[]




  constructor( private router: Router, private serviceDepartamento : DepartamentoService,  private service : FuncionarioService) { }

  ngOnInit() {

    this.iniciarDepartamento();

  }

  voltar(){
    this.router.navigate([''])

  }

  iniciarDepartamento(){
    this.serviceDepartamento.listarDTO().subscribe( response =>{
      console.log(response)
      this.departamentos = response
    })
  }
  cadastrar(){
    this.serviceDepartamento.buscarPorIdDto(this.id).subscribe(resp =>{
      console.log(this.id)
      console.log(resp)
     this.funcionario.departamento = resp
    })
    this.service.adicionar(this.funcionario).subscribe(() =>{

      alert('Cadastrou!')
    })
  }



}
