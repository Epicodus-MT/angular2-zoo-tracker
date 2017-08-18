import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Woodland Park Zoo -- Animal List</h1>
      <h2>{{month}}/{{day}}/{{year}}</h2>
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
         new Animal('Charlie', 'Elephant', 'Peanuts', 'Mice'),
         new Animal('Tim', 'Naked Mole Rat', 'Beetles', 'Sunlight'),
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
