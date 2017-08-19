import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3><em>{{childSelectedAnimal.name}}</em> - {{childSelectedAnimal.species}}</h3>
    <h4> Age: {{childSelectedAnimal.age}}</h4>
    <h4> Diet: {{childSelectedAnimal.diet}}</h4>
    <h4> Location: {{childSelectedAnimal.location}}</h4>
    <h4> Caretaker: {{childSelectedAnimal.caretaker}}</h4>
    <h4> Sex: {{childSelectedAnimal.sex}}</h4>
    <h4> Likes: {{childSelectedAnimal.likes}}</h4>
    <h4> Dislikes: {{childSelectedAnimal.dislikes}}</h4>
    <h4> Date: {{childSelectedAnimal.date}}</h4>
    <label>Enter new details:</label>
    <input [(ngModel)]="childSelectedAnimal.name" type="text">
    <input [(ngModel)]="childSelectedAnimal.species" type="text">
    <input [(ngModel)]="childSelectedAnimal.age" type="number">
    <input [(ngModel)]="childSelectedAnimal.diet" type="text">
    <input [(ngModel)]="childSelectedAnimal.location" type="text">
    <input [(ngModel)]="childSelectedAnimal.caretaker" type="number">
    <input [(ngModel)]="childSelectedAnimal.sex" type="text">
    <input [(ngModel)]="childSelectedAnimal.likes" type="text">
    <input [(ngModel)]="childSelectedAnimal.dislikes" type="text">
    <input [(ngModel)]="childSelectedAnimal.date" type="text">
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
}
