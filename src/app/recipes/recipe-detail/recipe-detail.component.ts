import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;

  constructor(private recipeService:RecipeService,
              private router:Router,
              private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(
      (params:Params) => {
        this.recipe = this.recipeService.getRecipe(+params["id"]);
        this.id = params["id"];
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEdit(){
    this.router.navigate(["edit"], {relativeTo: this.activedRoute});
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["/recipes"]);
  }
}
