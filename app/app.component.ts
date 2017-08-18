import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>Zoo Tracker
    <h2>{{month}}/{{day}}/{{year}}</h2>
    <h3>{{currentAnimal}}</h3>
     <animal-list></animal-list>
      <hr>
      <div *ngIf="selectedAnimal">
        <h3>{{selectedAnimal.description}}</h3>
        <p>Animal moved? {{selectedAnimal.done}}</p>
        <h3>Edit Animal</h3>
        <label>Enter Animal Description:</label>
        <input [(ngModel)]="selectedAnimal.description">
        <label>Enter Animal Age (young-mature):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedAnimal.age" [value]="1">Young (under 2 years)<br>
        <input type="radio" [(ngModel)]="selectedAnimal.age" [value]="2">Mature (2+ years)<br>
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
    `
})

export class AppComponent {
  currentAnimal: string = 'Tapir';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  animals: Animal[] = [
    new Animal('Zebra', 2),
    new Animal('Hippo', 2),
    new Animal('Lizard', 1)  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}
