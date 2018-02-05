import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule , IonicApp } from 'ionic-angular';
import { Page2Page } from './page2';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from '../../app/app.component';

@NgModule({
  declarations: [
    Page2Page
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(Page2Page),
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Go Back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }, {}

  )],
    bootstrap: [IonicApp],
  	entryComponents: [ MyApp ],
  	providers: []
})
export class Page2PageModule {}
