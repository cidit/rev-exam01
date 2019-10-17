import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListExerciceComponent } from './list-exercice/list-exercice.component';
import { ExerciceObject } from 'src/modele/objet.service';

@NgModule({
  declarations: [
    AppComponent,
    ListExerciceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ 
    ExerciceObject
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
