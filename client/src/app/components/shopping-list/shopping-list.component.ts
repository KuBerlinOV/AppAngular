import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  //# region Constans and Variable
  public ingredients: Ingredient[] = [];

  //# endregion

  //# region Constructor 
  constructor(private shoppingListService: ShoppingListService) { }
  //# endregion
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }

}
