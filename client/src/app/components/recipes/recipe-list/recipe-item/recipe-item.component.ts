import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = {
    name: "",
    description: "",
    imagePath: ""
  };
  @Output() onItemSelected = new EventEmitter<Recipe>()
  onItemSelect() {
    this.onItemSelected.emit()
  }
  constructor() { }
  ngOnInit(): void {

  }

}
