import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [{
    path:'',
    component:LoginComponent
  },{
    path:'mainPage',
    component:MainPageComponent
  },
  {
    path: 'apponeroute',
     loadChildren: () => import('appOne/moduleappone').then(m => m.PageoneModule)
  },
  {
    path: 'apptworoute',
     loadChildren: () => import('appTwo/movieModule').then(m => m.MovieListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
