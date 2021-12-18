import { DepartamentoService } from './../../departamento/departamento.service';
import { Departamento } from './../../models/Departamento';
import { Funcionario } from './../../models/Funcionario';
import { FuncionarioService } from './../funcionario.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentoDTO } from '../../models/DepartamentoDTO';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  id: number
  funcionario :Funcionario = new Funcionario()
  model = ''
  departamentos: DepartamentoDTO []
  departamento: DepartamentoDTO

  dep : Departamento

  constructor(private service: FuncionarioService,private serviceDepartamento : DepartamentoService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.iniciarDepartamento();
    this.iniciarFuncionario(this.id)

  }


  iniciarFuncionario(id: number){
      this.service.buscarId(id).subscribe((response) => {
        console.log(response.departamento)
        this.funcionario = response
        console.log(this.funcionario)


      })
  }
  editar(){
      this.service.editar(this.funcionario).subscribe((response) => {
      console.log(response);

    })
}

iniciarDepartamento(){
  this.serviceDepartamento.listarDTO().subscribe( response =>{
    console.log(response)
    this.departamentos = response
  })
}

}
