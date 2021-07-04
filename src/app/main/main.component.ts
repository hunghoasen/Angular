import { AddItemComponent } from './../add-item/add-item.component';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import {Item} from '../models/Item';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  items: Item[] = [];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private ItemService: ItemService) {  }

  ngOnInit(): void {
    this.ItemService.getItems().subscribe(items => {
      //console.log(items);

      this.items = items;
    });
  }

  deleteItem(_event: any ,item: Item){

    this.ItemService.deleteItem();

  }

  editItem(_event: any,item: Item){
    this.editState = true;
    this.itemToEdit = item;

  }

}
