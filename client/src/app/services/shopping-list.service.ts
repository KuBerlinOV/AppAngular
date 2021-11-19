import {Injectable, EventEmitter} from "@angular/core";

import { Ingredient } from "../components/shared/ingredient.model";


@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    
    public ingredientsChanged = new EventEmitter<Ingredient[]>()
    //#region Constants and Variables
    private _ingredients: Ingredient[] = [
        new Ingredient("minced meat", 600),
        new Ingredient("tomatoes", 2),
      ];

    //#endregion

    //#region Public Functionality
    public onAddedItem(newIngredient: Ingredient): void 
    {
        this._ingredients = [...this._ingredients, newIngredient]
        this.ingredientsChanged.emit(this._ingredients)
    }
    public onAddItems(ingredients: Ingredient[]): void
    {
        this._ingredients = [...this._ingredients, ...ingredients]
    }
    public getIngredients(): Ingredient[] 
    {
        return this._ingredients
    }
    //endregion
}