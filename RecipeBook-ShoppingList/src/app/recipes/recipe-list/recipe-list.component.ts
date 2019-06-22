import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('desert', 'sweet' ,'https://cdn.pixabay.com/photo/2017/07/16/10/37/dessert-2508853 960 720.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
