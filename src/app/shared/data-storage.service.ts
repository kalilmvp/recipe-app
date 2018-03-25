import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/Rx';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  recipeUrl:string = "https://ng-recipe-book-a1355.firebaseio.com/recipes.json?auth=";

  constructor(private http:Http,
              private recipeService:RecipeService,
              private authService:AuthService){}

  storeRecipes(){
    const token = this.authService.getToken();
    return this.http.put(
      this.recipeUrl + token,
      this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get(this.recipeUrl + token)
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
