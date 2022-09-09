import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SalvarlistComponent } from './salvarlist/salvarlist.component';

const routes: Routes = [
  {path:'',redirectTo:'component',pathMatch:'full'},
  {path:'list', component: ListComponent},
  {path:'add',component:SalvarlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
