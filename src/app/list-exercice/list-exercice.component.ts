import { Component, OnInit } from '@angular/core';
import { ExerciceObject } from 'src/modele/objet.service';
@Component({
  selector: 'app-list-exercice',
  templateUrl: './list-exercice.component.html',
  styleUrls: ['./list-exercice.component.css']
})
export class ListExerciceComponent implements OnInit {

  exemples: any = [];
  constructor(public exerciceObjet: ExerciceObject) { }

  ngOnInit() {
    this.loadObjects();
  }

  loadObjects(){
    return this.exerciceObjet.get().subscribe((data: {}) => {
      this.exemples = data;
    })
  }

}
