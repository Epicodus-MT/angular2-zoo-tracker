import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChange($event.target.age)">
    <option age="allAnimal" selected="selected">All Animals</option>
    <option age="matureAnimal">Mature Animals</option>
    <option age="youngAnimal">Young Animals</option>
  </select>

  <ul class="list-group">
    <li [class]="ageColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
      <h4><strong>{{currentAnimal.name}}</strong> || {{currentAnimal.species}}</h4><h5> Likes: {{currentAnimal.likes}}</h5><h5> Dislikes: {{currentAnimal.dislikes}}</h5><h6> Age: {{ currentAnimal.age }}</h6>
      <button (click) = "ageButtonHasBeenClicked(currentAnimal)">Add One Year</button>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimal";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  ageButtonHasBeenClicked(animalToAdd : Animal) {
    animalToAdd.age += 1;
    alert("Happy Birthday {{currentAnimal.name}}!");
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
