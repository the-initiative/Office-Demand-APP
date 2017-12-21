import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule { }
