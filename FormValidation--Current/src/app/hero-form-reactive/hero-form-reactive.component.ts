import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../forbidden-name.directive';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {

  powers: Array<string> = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]}
  heroForm !: FormGroup;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, 
        [
          Validators.required, 
          Validators.minLength(4), 
          forbiddenNameValidator(/bob/i) 
        ]),
      alterAgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required)
    })
  }

  get name() {return this.heroForm.get('name')}
  get power() {return this.heroForm.get('power')}

}
