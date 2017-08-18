import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <ul>
      <li [class]="ageColor(currentAnimal)" (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.description}} <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
    </ul>
  `
})

export class AnimalListComponent {
  animals: Animal[] = [
    new Animal('Horse', 1),
    new Animal('Pig', 1),
    new Animal('Chicken', 2)
  ];

  isDone(clickedAnimal: Animal) {
    if(clickedAnimal.done === true) {
      alert("This animal is no longer in this zoo's care.");
    } else {
      alert("This animal is currently residing in the zoo.");
    }
  }

  ageColor(currentAnimal){
    if (currentAnimal.age === 1){
      return "bg-info";
    // } else if (currentAnimal.age === 2) {
    //   return  "bg-danger";
    } else {
      return "bg-warning";
    }
  }
}
