import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
      loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
    },
    {
      path: ':recipeid',
      loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
    }
  
  ]
  },
  {
    path: 'login',
    loadChildren: () => import('./Login/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
