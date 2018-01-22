import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[] = [
    /*new Ingredients("Ingredient 1", 50.4),
    new Ingredients("Ingredient 2", 100.4),
    new Ingredients("Ingredient 3", 61.1),
    new Ingredients("Ingredient 4", 97.2),
    new Ingredients("Ingredient 5", 65.4)*/
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredients) {
    console.log(1);
    this.ingredients.push(ingredient);
  }
}