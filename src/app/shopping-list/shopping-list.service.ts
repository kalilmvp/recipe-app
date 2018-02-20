import {Ingredients} from "../shared/ingredients.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();

  private ingredients:Ingredients[] = [];

  public getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(... ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
