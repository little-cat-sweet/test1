import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from "./hello/hello.component";
import {TitleComponent} from "./title/title.component";
import {CatComponent} from "./cat/cat.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:'hello',
    component: HelloComponent,
    children: [
      {path:'cat', component: CatComponent}
    ]
  },
  {path:'title/:id/:name', component: TitleComponent},
  {path:'', component: HelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
