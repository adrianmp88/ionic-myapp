import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadRecipe: Recipe;
  constructor(
    private activaroute: ActivatedRoute,
    private rpservice: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activaroute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeid')) {
        return;
      }
      const recipeid = paramMap.get('recipeid');
      this.loadRecipe =  this.rpservice.getRecipe(recipeid);
    });
  }

  onDeleteR() {
    this.alertCtrl.create({header: '¿Esta seguro?', message: '¿Esta seguro de querer eliminar?', 
    buttons: [{text: 'Cancelar', role: 'Cancel'}, {
      text: 'Eliminar',
      handler: () => {
        this.rpservice.deleteRecipe(this.loadRecipe.id);
        this.router.navigate(['/recipes']);
      }
    }]
  }).then(alertEl => {
    alertEl.present();
  });
}



}
