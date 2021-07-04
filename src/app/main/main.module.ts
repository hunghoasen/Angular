import { AddItemComponent } from './../add-item/add-item.component';
import { MainComponent } from './main.component';
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { CommonModule } from "@angular/common";

const mainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'addItem',
    component: AddItemComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(MainComponent)
  ]
})
export class MainModule { }
