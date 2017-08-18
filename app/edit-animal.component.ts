import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3><em>{{childSelectedAnimal.name}}</em> || {{childSelectedAnimal.species}}</h3><h4> Likes: {{childSelectedAnimal.likes}}</h4>
    <h4> Dislikes: {{childSelectedAnimal.dislikes}}</h4>
    <label>Enter new age:</label>
    <input [(ngModel)]="childSelectedAnimal.age" type="number">
    <button (click)="doneButtonClicked()">Delete</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
