import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Woodland Park Zoo -- Animal List</h1>
      <h3>{{currentAnimal}}</h3>

      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>

      <edit-animal [childSelectedAnimal] = "selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

      <age-increase [childSelectedAnimal] = "selectedAnimal" (clickSender) = "addAge($event)"></age-increase>

      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

    </div>
    `
})

export class AppComponent {
  subtitle: string = 'Add and Edit Newly-Admitted Animals';

  masterAnimalList: Animal[] = [
    new Animal('Charlie', 'Elephant', 1, 'Herbivore', 'Jungle Hut', 5, 'Male', 'Peanuts', 'Mice', 'December 5, 2011'),
    new Animal('Moon', 'Arctic Fox', 0, 'Carnivore', 'Northern Trail', 2, 'Female', 'Laying in Sunshine', 'Crowds', 'September 20, 2012'),
    new Animal('Wendy', 'Black Tailed Deer', 1, 'Herbivore', 'Forest Retreat', 1, 'Female', 'Roots and berries', 'Loud Noises', 'January 5, 2011'),
    new Animal('William', 'Emu', 3, 'Herbivore', 'Australasia Farm', 3, 'Male', 'Hot Weather', 'Other male emus', 'March 14, 2010'),
   ];

   selectedAnimal: Animal = null;

   editAnimal(clickedAnimal) {
     this.selectedAnimal = clickedAnimal;
   }

   finishedEditing() {
     this.selectedAnimal = null;
   }

   addAge(clickedAnimal) {
     this.selectedAnimal = clickedAnimal;
   }

   addAnimal(newAnimalFromChild: Animal) {
     this.masterAnimalList.push(newAnimalFromChild);
   }
 }
