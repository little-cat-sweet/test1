import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloComponent} from "./hello/hello.component";
import {TitleComponent} from "./title/title.component";

const routes: Routes = [
  {path:'hello', component: HelloComponent},
  {path:'title', component: TitleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
