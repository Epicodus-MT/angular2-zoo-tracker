import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
      <h1>Zoo Tracker</h1>
      <h3>{{currentSpecies}}</h3>
  </div>
  `
})

export class AppComponent {
  currentSpecies: string = 'Tapir';
}
