import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredients} from "../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe(
        "Recipe 1",
        "Description 1",
        "http://img1.cookinglight.timeinc.net/sites/default/files/updated_main_images/1201p124-chicken-piccata-x.jpg",
        [
          new Ingredients("Meat", 1),
          new Ingredients("French Fries", 19 )
        ]),
    new Recipe(
        "Recipe 2",
        "Description 2",
        "http://img1.cookinglight.timeinc.net/sites/default/files/updated_main_images/1201p124-chicken-piccata-x.jpg",
      [
        new Ingredients("Bread", 90),
        new Ingredients("Butter", 100 )
      ])
  ];

  constructor(private shoppingListService:ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id:number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients:Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
