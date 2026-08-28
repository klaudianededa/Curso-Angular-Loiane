import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosGuard } from "../guards/alunos.guard";
import { AlunosDeactivateGuard } from "../guards/alunos.deactivate.guard";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";

const alunosRoutes = [
  {
    path: '', component: AlunosComponent,
    CanActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent,
        resolve: { aluno : AlunoDetalheResolver }
       },
      { path: ':id/editar', component: AlunoFormComponent,
        CanDeactivate: [AlunosDeactivateGuard]
      }
    ]
  }


];

@NgModule({
  imports: [
    RouterModule.forChild(alunosRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AlunosRoutingModule { }
