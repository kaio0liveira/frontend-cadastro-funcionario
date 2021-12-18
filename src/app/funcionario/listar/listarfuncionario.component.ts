import { Router } from '@angular/router';
import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../../models/Funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarfuncionario',
  templateUrl: './listarfuncionario.component.html',
  styleUrls: ['./listarfuncionario.component.css']
})
export class ListarfuncionarioComponent implements OnInit {

  constructor( private service: FuncionarioService, private router: Router) { }

  funcionarios: Funcionario[];

  filtro: string;

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.service.listar().subscribe((data: Funcionario[]) =>{
      this.funcionarios = data;

    })
  }
  excluir(id: number){
    this.service.excluir(id).subscribe(()=>{
      console.log('Deletou')
    })
  }

  editar(id: any){
    this.router.navigate([`atualizar/${id}`])

  }
  cadastrar(){
    this.router.navigate([`cadastrarFuncionario`])

  }

  listarPorNome(){
    if(this.filtro !== undefined){
      this.service.listarPorNome(this.filtro).subscribe(data =>{
        this.funcionarios = data;
      })
    }

  }

}
