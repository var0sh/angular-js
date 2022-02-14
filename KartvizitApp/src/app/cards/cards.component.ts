import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../models/card';
import { CardModelComponent } from './card-model/card-model.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cardItem: Card = {
    title: 'Furkan Akçatepe',
    subTitle: 'Frontend Developer',
    phone: '0541 485 76 80',
    email: 'abc@gmail.com',
    address: 'Tepebaşı *ESKİŞEHİR'
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddCardModel() {
    this.dialog.open(CardModelComponent, {
      width: '400px'
    });
  }

}
