import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
    //this.items = this.afs.collection('items').valueChanges();
    this.itemsCollection = afs.collection<Item>('items',ref => ref.orderBy('id','asc'));

    this.items = this.itemsCollection.valueChanges();

    //    this.items = this.afs.collection('items').snapshotChanges().pipe(map((changes) => { return changes.map((a) => {
    //      const data = a.payload.doc.data() as Item;
    //      data.id = a.payload.doc.id;
    //      return data;
    //    });
    //  }))
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item){
    this.itemsCollection.add(item);
  }

  // deleteItem(item: Item){
  //   this.itemDoc = this.afs.doc(`items/${item.id}`);
  //   this.itemDoc.delete();
  // }
  editItem(id:string="update id", name:string="update item"){
    let docId = "CqYQLKslXW6EJ2W1QIbb"
    let it : Item = {};
    it.id=id
    it.name = name

    this.itemsCollection.doc(docId).update(it);
  }
  deleteItem(docId = "CqYQLKslXW6EJ2W1QIbb"){
       this.itemsCollection.doc(docId).delete();
  }

}
