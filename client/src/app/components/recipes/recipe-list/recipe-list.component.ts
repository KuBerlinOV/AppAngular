import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Tefteli', 'Russian food', 'https://static8.depositphotos.com/1027198/1067/i/600/depositphotos_10679354-stock-photo-grilled-meatballs.jpg'),
    new Recipe('Plov', 'Uzbek food', 'https://static8.depositphotos.com/1027198/1067/i/600/depositphotos_10679354-stock-photo-grilled-meatballs.jpg')
  ];
  onSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
