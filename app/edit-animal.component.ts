import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>{{childSelectedAnimal.name}} | <em>Likes: {{childSelectedAnimal.likes}}</em></h3>
    <h3><em>Dislikes: {{childSelectedAnimal.dislikes}}</em></h4>
    <label>Enter new age:</label>
    <input [(ngModel)]="childSelectedAnimal.price" type="number">
    <button (click)="refilleAnimalClicked(childSelectedAnimal)">Refill Animal</button>

    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  refilleAnimalClicked(childSelectedAnimal) {
    childSelectedAnimal.pints=124;
  }
}
