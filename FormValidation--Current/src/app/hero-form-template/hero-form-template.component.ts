import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.css']
})
export class HeroFormTemplateComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  constructor() { }

  ngOnInit(): void { }

}
