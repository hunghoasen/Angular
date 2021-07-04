import { ItemService } from './../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    id: '',
    name: ''
  }

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.item.id != '' && this.item.name != ''){
      this.ItemService.addItem(this.item);
      this.item.id = '';
      this.item.name = '';
    }
  }

}
