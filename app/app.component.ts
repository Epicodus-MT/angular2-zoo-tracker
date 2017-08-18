import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Woodland Park Zoo -- Animal List</h1>
     <h2>{{month}}/{{day}}/{{year}}</h2>
     <h3>{{currentAnimal}}</h3>

     <animal-list></animal-list>

      <hr>
      <div *ngIf="selectedAnimal">
        <h3>{{selectedAnimal.description}}</h3>
        <p>Animal Complete? {{selectedAnimal.done}}</p>
        <h3>Edit Animal</h3>
        <label>Enter Animal Description:</label>
        <input [(ngModel)]="selectedAnimal.description">
        <label>Enter Animal Age (Young or Mature):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedAnimal.age" [value]="1">Young (<2 years)<br>
        <input type="radio" [(ngModel)]="selectedAnimal.age" [value]="2">Mature (2+ years)<br>
        <button (click)="finishedEditing()">Done</button>
      </div>
      <p>(Blue - Young | Yellow - Mature)

    </div>
    `
})

export class AppComponent {
  currentAnimal: string = 'Current Zoo Residents';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  animals: Animal[] = [
    new Animal('Gorilla', 1),
    new Animal('Giraffe', 2),
    new Animal('Elephant', 2)  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}
