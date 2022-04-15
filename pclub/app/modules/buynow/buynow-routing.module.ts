import { NgModule }				from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';
import { DashboardComponent } 	from './dashboard/dashboard.component';

const modRoutes: Routes = [
    {path:'', 	component: DashboardComponent, data:{id:0,title:'Perfumer\'s Club: Buy Now!'}}
];

@NgModule({
  imports: [RouterModule.forChild(modRoutes)],
  exports: [RouterModule]
})
export class BuynowRoutingModule { }
