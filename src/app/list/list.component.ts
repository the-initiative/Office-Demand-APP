import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';




export interface Item { name: string; date: string; id: string; rating: number}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  public name: string;
  public date: string;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private currentItemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  voteUp(item: Item) {
    this.currentItemDoc = this.itemsCollection.doc('/' + item.id);
    this.currentItemDoc.update({rating: isNaN(item.rating) ?  1 : item.rating + 1});
  }

  voteDown(item: Item) {
    this.currentItemDoc = this.itemsCollection.doc('/' + item.id);
    this.currentItemDoc.update({rating: isNaN(item.rating) ? 1 : item.rating - 1});
  }

  ngOnInit() {
  }
}
