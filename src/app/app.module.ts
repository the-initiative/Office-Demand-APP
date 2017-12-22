import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AppComponent} from './app.component';
import {RoutingModule} from './routing.module';
import {firebaseConfig} from './environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ListModule } from './list/list.module';
import { ItemModule } from './item/item.module';
import { UserModule } from './user/user.module';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ListModule,
    ItemModule,
    UserModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
