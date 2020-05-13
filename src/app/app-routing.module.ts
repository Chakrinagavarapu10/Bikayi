import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:'',component:ListComponent,pathMatch:'full'},
  {path:'error',component:ErrorComponent},
  {path:'**',redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
