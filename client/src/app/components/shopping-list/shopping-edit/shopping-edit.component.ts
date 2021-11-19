import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  //#region Consts & Variables

  @ViewChild("name", { static: true }) nameInputRef: ElementRef;
  @ViewChild("amount", { static: true }) amountInputRef: ElementRef;

  //#endregion

  //# region Event-Handlers
  onAddItem(): void {
    const name: string = this.nameInputRef.nativeElement.value;
    const amount: number = this.amountInputRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(name, amount);
    this.shoppingListService.onAddedItem(newIngredient);
  }

  //#endregion

  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

}
