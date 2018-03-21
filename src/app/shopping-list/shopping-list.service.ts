import {Ingredients} from "../shared/ingredients.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  startEditing = new Subject<number>();

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

  getIngredient(index:number) {
    return this.ingredients[index];
  }

  updateIngredient(index:number, newIngredient:Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
