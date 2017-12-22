import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule { }
