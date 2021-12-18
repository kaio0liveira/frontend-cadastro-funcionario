import { VisualizarDepartamentoComponent } from './departamento/visualizar-departamento/visualizar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento.component';
import { ListarfuncionarioComponent } from './funcionario/listar/listarfuncionario.component';
import { EditarFuncionarioComponent } from './funcionario/editar-funcionario/editar-funcionario.component';

import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'

const routes : Routes = [
{path: 'cadastrarFuncionario', component: CadastrarFuncionarioComponent},
{path: '', component: ListarfuncionarioComponent},
{path: 'departamento', component: ListarDepartamentoComponent},
{path: 'visualizar/:id', component: VisualizarDepartamentoComponent},
{path: 'atualizar/:id', component: EditarFuncionarioComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{

}
