import { DepartamentoDTO } from './../models/DepartamentoDTO';
import { Departamento } from './../models/Departamento';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DepartamentoService {

private  API = 'http://localhost:8080/departamento'

  constructor(
   private  http: HttpClient
  ) { }


  listar(){
    return this.http.get<Departamento[]>(`${this.API}`)

  }

  listarDTO(){
    return this.http.get<DepartamentoDTO[]>(`${this.API}/dto`)

  }

  excluir(id: any){
   return  this.http.delete(`${this.API}/${id}`)
  }

  buscarPorId(id : any){
    return  this.http.get<Departamento>(`${this.API}/${id}`)
  }
  buscarPorIdDto(id : any){
    return  this.http.get<DepartamentoDTO>(`${this.API}/dto/${id}`)
  }

  //excluir(id: any){
  //  return this.http.delete(`${this.API}/${id}`)
 // }
  //adicionar(prod: T){
   // return this.http.post(this.API, prod)
  //}
 // editar(prod: T){
 //   return this.http.put(`${this.API}/${prod.id}`, prod)
  //}
  ///buscarId(id: any){
   // return this.http.get<T>(`${this.API}/${id}`)
 // }



}
