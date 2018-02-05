import { Directive } from '@angular/core';

/**
 * Generated class for the MydirectiveDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[mydirective]' // Attribute selector
})
export class MydirectiveDirective {

  constructor() {
    console.log('Hello MydirectiveDirective Directive');
  }

}
