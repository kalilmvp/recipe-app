import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("Recipe 1", "Description 1", "http://img1.cookinglight.timeinc.net/sites/default/files/updated_main_images/1201p124-chicken-piccata-x.jpg"),
    new Recipe("Recipe 2", "Description 2", "http://img1.cookinglight.timeinc.net/sites/default/files/updated_main_images/1201p124-chicken-piccata-x.jpg")
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
