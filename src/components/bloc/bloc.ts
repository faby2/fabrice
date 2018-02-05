import { Component } from '@angular/core';

/**
 * Generated class for the BlocComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bloc',
  templateUrl: 'bloc.html'
})
export class BlocComponent {

  text: string;

  constructor() {
    console.log('Hello BlocComponent Component');
    this.text = 'Hello World';
  }

}
