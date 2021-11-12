import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("name", { static: true }) nameInputRef: ElementRef;
  @ViewChild("amount", { static: true }) amountInputRef: ElementRef
  @Output() onAddedItem = new EventEmitter<Ingredient>();
  onAddItem() {
    const name: string = this.nameInputRef.nativeElement.value
    const amount: number = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(name, amount)
    this.onAddedItem.emit(newIngredient)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
