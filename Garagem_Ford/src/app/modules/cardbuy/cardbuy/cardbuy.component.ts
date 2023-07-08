import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { Card } from 'src/app/core/models/card.model';
import { CarrosService } from 'src/app/core/services/carros.service';

@Component({
  selector: 'app-cardbuy',
  templateUrl: './cardbuy.component.html',
  styleUrls: ['./cardbuy.component.scss']
})

export class CardbuyComponent implements OnInit{

  cardsBuySubscription: Subscription[] = [];

  cardsBuy: Card[] = [];

  constructor (private service: CarrosService) {}

  ngOnInit(): void {
    this.getCards();
  }

  buyCar(car: Card):void{
    let id:number = car.id
    car.status = 'SELL'
    this.cardsBuySubscription.push(this.service.update(car, id).subscribe())
  }

  removeCar(id: number): void{
    this.cardsBuySubscription.push(this.service.delete(id).subscribe())
    for(let i = 0; i < this.cardsBuy.length; i++){
      if(this.cardsBuy[i].id == id){
        this.cardsBuy.splice(i, 1);
      }
    }
  }

  getCards(): void{
    this.cardsBuySubscription.push(this.service.getAll().subscribe(cards => {
      this.cardsBuy = cards
    }));
  } 

  ngOnDestroy(){
    this.cardsBuySubscription.forEach(s => s.unsubscribe())
  }

}