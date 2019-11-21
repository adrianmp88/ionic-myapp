import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Router } from '@angular/router';
import { AutenthicationService } from '../services/autenthication.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(private  recipeServices: RecipesService, private auth: AutenthicationService) { }

  ngOnInit() {
    this.recipes = this.recipeServices.getAllRecipes();
  }
  logOut() {
    this.auth.logout();
  }
}
