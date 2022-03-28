import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInternComponent } from 'src/intern/add-intern/add-intern.component';
import { HomeComponent } from 'src/intern/home/home.component';

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch:"full" },
    { path: "add-intern", component: AddInternComponent},
    { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
