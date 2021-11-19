import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  

  //#region Constants und Variables
  public recipes: Recipe[] = [];
  //#endregion
 

  

  //#region Constructor
  constructor(private recipesService: RecipesService) { }

  //#endregion

  //#region Interfaces
  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes;
  }
  //#endregion
}
