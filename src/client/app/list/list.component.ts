import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded listComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {

  newItem = '';
  items: any[] = [];


  ngOnInit() {
    this.getItems();
  }

  getItems() {
    //integrate firebase call
  }

  deleteItem(index: number) {
    this.items.splice(index,1);
  }
}
