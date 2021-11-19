import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {
  
  }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe)=>{
        this.selectedRecipe = recipe
      }
    )
  }

}
