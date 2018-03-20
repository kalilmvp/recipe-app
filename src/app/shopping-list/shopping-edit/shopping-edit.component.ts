import {Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("form") shoppingListForm:NgForm;

  subscription:Subscription;
  editMode = false;
  editItemIndex:number;
  editItem:Ingredients;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index:number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  onAddItem(form:NgForm){
    const value = form.value;
    this.shoppingListService.addIngredient(
      new Ingredients(
        value.name,
        value.amount
    ));
  }

  onRemoveItem(){}

  onClear(){}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
