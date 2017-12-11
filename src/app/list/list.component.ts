import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Item { name: string; }

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


  export class ListComponent {
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;
    constructor(private afs: AngularFirestore) {
      this.itemsCollection = afs.collection<Item>('items');
      this.items = this.itemsCollection.valueChanges();
    }
    addItem(item: Item) {
      this.itemsCollection.add(item);
    }
  }
