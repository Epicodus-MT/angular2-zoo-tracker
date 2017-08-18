
import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="new-animal-form">
    <form>
      <h1>New Animal</h1>
      <div class="form-group">
        <label>Name:</label>
        <input #newName>
      </div>
      <div class="form-group">
        <label>Species:</label>
        <input #newSpecies>
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input #newAge type="number">
      </div>
      <div class="form-group">
        <label>Likes:</label>
        <input #newLikes>
      </div>
      <div class="form-group">
        <label>Dislikes:</label>
        <input #newDislikes>
      </div>

      <button (click)="addAnimal(newName.value, newSpecies.value, newAge.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newAge.value=''; newLikes.value='', newDislikes.value='';">Add Animal!</button>
    </form>
  </div>
  `

})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  addAnimal(name: string, species: string, age: string, likes: string, dislikes: string) {
    if (name==="" || species === "" || age==="" || likes==="" || dislikes===""){
      alert("You must put values into each field!");
    } else {
    var convertedAge = Number(age);
    var newAnimalToAdd: Animal = new Animal(name, species, convertedAge, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}

}
