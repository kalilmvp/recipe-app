import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredients} from "../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

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

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
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

  addRecipe(newRecipe:Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe:Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
