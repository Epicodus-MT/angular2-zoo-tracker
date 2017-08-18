import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'age-increase',
  template: `

  `
})

export class AgeIncreaseComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() clickSender = new EventEmitter();

  ageButtonHasBeenClicked(animalToAdd : Animal) {
    animalToAdd.age += 1;
  }
}
