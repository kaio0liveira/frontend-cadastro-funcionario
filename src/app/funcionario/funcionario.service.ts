import { Funcionario } from './../models/Funcionario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FuncionarioService {

private  API = 'http://localhost:8080/funcionario'

  constructor(
   private  http: HttpClient
  ) { }


  listar(){
    return this.http.get<Funcionario[]>(`${this.API}`)

  }
  listarPorNome(filtro: string){
    return this.http.get<Funcionario[]>(`${this.API}/filtro/${filtro}`)

  }

  excluir(id: any){
   return  this.http.delete(`${this.API}/${id}`)
  }
  //excluir(id: any){
  //  return this.http.delete(`${this.API}/${id}`)
 // }
  adicionar(funcionario: Funcionario){
   return this.http.post(this.API, funcionario)
  }
  editar(funcionario: Funcionario): Observable<any>{
    return this.http.put(`${this.API}/${funcionario.id}`, funcionario)
  }
  buscarId(id: number){
    return this.http.get<Funcionario>(`${this.API}/${id}`)
  }



}
