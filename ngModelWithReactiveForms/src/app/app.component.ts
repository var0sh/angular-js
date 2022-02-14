import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngModelWithReactiveForms';

  public form: FormGroup;
  public person: Person = new Person();

  constructor(builder: FormBuilder) { 
    this.form = builder.group({
      name: [this.person.name, Validators.required],
      sirname: [this.person.name, Validators.maxLength],
    });
  }


}
