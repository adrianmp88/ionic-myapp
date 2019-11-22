import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },*/
  {
    path: 'recipes',
    children: [
    {
      path: '',
      loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule),
      canActivate: [AuthguardService]
    },
    {
      path: ':recipeid',
      loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule),
      canActivate: [AuthguardService]
    }
  ]
  },
  {
    path: 'login',
    loadChildren: () => import('./Login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'entrega',
    loadChildren: () => import('./entrega/entrega.module').then( m => m.EntregaPageModule),
    canActivate: [AuthguardService]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthguardService]
  },
  {
    path: 'puntocontrol',
    loadChildren: () => import('./puntocontrol/puntocontrol.module').then( m => m.PuntocontrolPageModule),
    canActivate: [AuthguardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
