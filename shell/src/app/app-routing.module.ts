import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [{
    path:'',
    component:MainPageComponent
  },
  {
    path:'mfe4',
    component:WrapperComponent
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
