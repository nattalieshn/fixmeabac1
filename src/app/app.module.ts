import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { DetailComponent } from './detail/detail.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD9wBjZlpm2qOyUlnzh4Ax_8a22p2kTayo",
  authDomain: "fixmeabac.firebaseapp.com",
  databaseURL: "https://fixmeabac.firebaseio.com",
  projectId: "fixmeabac",
  storageBucket: "",
  messagingSenderId: "483379790841"
};


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
