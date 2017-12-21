import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, ListRoutingModule, FormsModule],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule { }
