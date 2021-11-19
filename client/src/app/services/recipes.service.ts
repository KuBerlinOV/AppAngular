import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "../components/recipes/recipe.model";
import { Ingredient } from "../components/shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";


@Injectable({
        providedIn: 'root'
    })
export class RecipesService {
  
    //#region Constants und Variables
    private _recipes: Recipe[] = [
        new Recipe('Tefteli', 'Russian food', 'https://static8.depositphotos.com/1027198/1067/i/600/depositphotos_10679354-stock-photo-grilled-meatballs.jpg', 
        [
            new Ingredient("minced meat", 2),
            new Ingredient("onion", 1)
    ]),
        new Recipe('Plov', 'Uzbek food', 'https://static8.depositphotos.com/1027198/1067/i/600/depositphotos_10679354-stock-photo-grilled-meatballs.jpg',[new Ingredient("rice", 0.5)])
      ];

    //#endregion

    //#region Public functionality
    public recipeSelected = new EventEmitter<Recipe>()

    public get getRecipes(): Recipe[] 
    {
        return this._recipes.slice()
    }
   
    //#endregion
    
      constructor(){}
}