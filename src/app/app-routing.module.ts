import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './Components/table/table.component';

const routes: Routes = [
  {path:"/",component:TableComponent},
  {path:"*",redirectTo:"/",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
