import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { Card } from 'src/app/core/models/card.model';
import { CarrosService } from 'src/app/core/services/carros.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  cardsSubscription: Subscription[] = [];

  cardsGarage: Card[] = [];

  sellCar(car: Card):void{
    let id:number = car.id
    car.status = 'BUY'
    this.cardsSubscription.push(this.service.update(car, id).subscribe())
  }

  constructor(private service: CarrosService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void{
    this.cardsSubscription.push(this.service.getAll().subscribe(cards => {
      this.cardsGarage = cards
    }));
  } 

  ngOnDestroy(){
    this.cardsSubscription.forEach(s => s.unsubscribe())
  }

}
