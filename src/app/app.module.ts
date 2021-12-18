import { DepartamentoService} from './departamento/departamento.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FuncionarioService} from './funcionario/funcionario.service'

import {  RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ListarfuncionarioComponent} from './funcionario/listar/listarfuncionario.component'
import {ListarDepartamentoComponent} from './departamento/listar-departamento.component'
import {AppRoutingModule} from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { VisualizarDepartamentoComponent } from './departamento/visualizar-departamento/visualizar-departamento.component';
import { EditarFuncionarioComponent } from './funcionario/editar-funcionario/editar-funcionario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarfuncionarioComponent,
    ListarDepartamentoComponent,
    CadastrarFuncionarioComponent,
    VisualizarDepartamentoComponent,
    EditarFuncionarioComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [FuncionarioService,DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule {




 }
