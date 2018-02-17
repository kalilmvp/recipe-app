import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;

  constructor(private recipeService:RecipeService,
              private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(
      (params:Params) => {
        this.recipe = this.recipeService.getRecipe(+params["id"]);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
