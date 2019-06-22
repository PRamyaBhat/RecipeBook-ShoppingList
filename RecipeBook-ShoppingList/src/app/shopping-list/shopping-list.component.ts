import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingredients : Ingredient[] = [
new Ingredient('Apple' , 5),
new Ingredient('Banana' , 12),
]
//we need ingredient model many times at globally hence keep it inside the shared folder inside the app folder
  constructor() { }

  ngOnInit() {
  }

}
