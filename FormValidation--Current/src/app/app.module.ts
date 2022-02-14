import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';
import { ForbiddenNameDirective } from './forbidden-name.directive';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormTemplateComponent,
    ForbiddenNameDirective,
    HeroFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
