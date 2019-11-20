import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Schnitzel',
      imagenUrl: 'assets/shnitzel.jpg',
      ingredients: ['Papas a la francesa', 'Ensalda']
    },
    {
      id: '2',
      title: 'Spaguetti',
      imagenUrl: 'assets/spaguetti.jpg',
      ingredients: ['Spaguetti','Carne']
    }
  ];
  constructor() { }
  
  getAllRecipes(){
    return[...this.recipes];
  }

  getRecipe(recipeid: string){
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeid;
      })
    };
  }

  deleteRecipe(recipeid: string){
     this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeid;
    });
  }
}
