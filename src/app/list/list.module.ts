import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';



@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule { }
