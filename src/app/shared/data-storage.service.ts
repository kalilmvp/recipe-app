import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  recipeUrl:string = "https://ng-recipe-book-a1355.firebaseio.com/recipes.json";

  constructor(private http:Http, private recipeService:RecipeService){}

  storeRecipes(){
    return this.http.put(
      this.recipeUrl,
      this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.recipeUrl)
      .map(
        (response:Response) => {
          const recipes:Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              recipe["ingredients"] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
      (recipes:Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
