import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {incrementalFromCompilerTicket} from "@angular/compiler-cli/src/ngtsc/core";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Karahi',
      'Pakistani dish',
      'https://fatimacooks.net/wp-content/uploads/2020/02/IMG_1872-scaled.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Masala', 2),
      ]
      ),

    new Recipe(
      'Hyderabadi Biryani',
      'Indian dish',
      'https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg',
      [
        new Ingredient('Rice', 3),
        new Ingredient('Chicken', 2),
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);

  }

}
