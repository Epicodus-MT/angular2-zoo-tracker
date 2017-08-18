import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <ul>
      <li [class]="ageColor(currentAnimal)" (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.description}} <button (click)="editAnimal(currentAnimal)">Edit Details</button></li>
    </ul>
  `
})

export class AnimalListComponent {
  animals: Animal[] = [
    new Animal('Horse', 1),
    new Animal('Chicken', 2),
    new Animal('Rhino', 2)
  ];

  isDone(clickedAnimal: Animal) {
    if(clickedAnimal.done === true) {
      alert("This animal is no longer at Woodland Park Zoo.");
    } else {
      alert("This animal currently resides at Woodland Park Zoo.");
    }
  }

  ageColor(currentAnimal){
    if (currentAnimal.age === 2){
    //   return "bg-danger";
    // } else if (currentAnimal.age === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
