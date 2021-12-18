import { DepartamentoService } from './departamento.service';
import { Departamento } from './../models/Departamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {

  departamentos: Departamento[]
  departamento: Departamento

  constructor( private service: DepartamentoService, private router: Router) { }

  ngOnInit() {
    this.listar()
  }

listar(){
  this.service.listar().subscribe((data)=>{
    this.departamentos = data;
    console.log(this.departamentos[2])
  })
}

teste(id: number){
  this.router.navigate([`visualizar/${id}`])
}


}
