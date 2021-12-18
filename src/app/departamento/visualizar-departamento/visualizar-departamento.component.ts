import { FuncionarioService } from './../../funcionario/funcionario.service';
import { Funcionario } from './../../models/Funcionario';
import { Departamento } from './../../models/Departamento';
import { DepartamentoService } from './../departamento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-departamento',
  templateUrl: './visualizar-departamento.component.html',
  styleUrls: ['./visualizar-departamento.component.css']
})
export class VisualizarDepartamentoComponent implements OnInit {

  constructor(private service : DepartamentoService,private serviceFuncionario: FuncionarioService, private route: ActivatedRoute) { }
  id: number;
  departamento: Departamento = new Departamento
  funcionarios : Funcionario[]

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.visualizar(this.id)
  }

  visualizar(id: number){
    this.service.buscarPorId(id).subscribe((response) => {

      this.departamento = response

      this.funcionarios = response.funcionarios
    })
  }
  excluir(id: number){
   this.serviceFuncionario.excluir(id).subscribe(() =>{
     console.log("Deletou")
   })
  }

}
