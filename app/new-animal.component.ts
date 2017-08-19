
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
        <label>Diet:</label>
        <input #newDiet>
      </div>
      <div class="form-group">
        <label>Location:</label>
        <input #newLocation>
      </div>
      <div class="form-group">
        <label># of Caretakers:</label>
        <input #newCaretaker type="number">
      </div>
      <div class="form-group">
        <label>Sex:</label>
        <input #newSex>
      </div>
      <div class="form-group">
        <label>Likes:</label>
        <input #newLikes>
      </div>
      <div class="form-group">
        <label>Dislikes:</label>
        <input #newDislikes>
      </div>
      <div class="form-group">
        <label>Date Admitted:</label>
        <input #newDate>
      </div>

      <button (click)="addAnimal(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newSex.value, newLikes.value, newDislikes.value, newDate.value); newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretaker.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; newDate.value='';">Add Animal!</button>
    </form>
  </div>
  `

})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  addAnimal(name: string, species: string, age: number, diet: string, location: string, caretaker: number, sex: string, likes: string, dislikes: string, date: string) {
    if (name === "" || species === ""){
      alert("You must put values into each field!");
    } else {
    var convertedAge = Number(age);
    var convertedCaretaker = Number(caretaker);
    var newAnimalToAdd: Animal = new Animal(name, species, convertedAge, diet, location, convertedCaretaker, sex, likes, dislikes, date);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}

}
