import { NgModule } from '@angular/core';
import { MyFirstPipe } from './my-first/my-first';
@NgModule({
	declarations: [MyFirstPipe],
	imports: [],
	exports: [MyFirstPipe]
})
export class PipesModule {}
