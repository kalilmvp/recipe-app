import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput:ElementRef;
  @ViewChild("amountInput") amountInput:ElementRef;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    this.shoppingListService.addIngredient(
      new Ingredients(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
    ));
  }

  onRemoveItem(){}

  onClear(){}
}
