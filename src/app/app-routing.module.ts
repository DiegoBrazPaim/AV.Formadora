import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-gastos',
    loadChildren: () => import('./add-gastos/add-gastos.module').then( m => m.AddGastosPageModule)
  },
  {
    path: 'gastos-list',
    loadChildren: () => import('./gastos-list/gastos-list.module').then( m => m.GastosListPageModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'add-gastos', loadChildren: () => import('./add-gastos/add-gastos.module').then(m => m.AddGastosPageModule) },
  { path: 'gastos-list', loadChildren: () => import('./gastos-list/gastos-list.module').then(m => m.GastosListPageModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
