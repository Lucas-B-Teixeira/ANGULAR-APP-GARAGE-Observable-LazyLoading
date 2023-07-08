import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Card } from 'src/app/core/models/card.model';
import { CarrosService } from 'src/app/core/services/carros.service';

@Component({
  selector: 'app-pagecar',
  templateUrl: './pagecar.component.html',
  styleUrls: ['./pagecar.component.scss']
})
export class PagecarComponent implements OnInit{

  pagecarSubscription: Subscription[] = [];

  car!: Card;

  editCar: boolean = false;

  cardsBuy: Card[] = [];

  buyCar(car: Card):void{
    car.status = 'SELL'
    this.pagecarSubscription.push(this.service.update(car, car.id).subscribe())
  }

  enableEdit(): void{
    this.editCar = !this.editCar
  }

  editCard(): void{
    this.pagecarSubscription.push(this.service.update(this.car, this.car.id).subscribe());
  }

  removeCar(id: number): void{
    this.pagecarSubscription.push(this.service.delete(id).subscribe())
  }

  constructor(private service: CarrosService ,private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.getCarro()
    this.getCards()
  }

  getCarro(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== undefined && id !== null){
      this.pagecarSubscription.push(this.service.getById(parseInt(id)).subscribe(p => {
        this.car = p
      },
      err => {
        this.router.navigate(['**']);
      }
      ));
    }
  } 

  getCards(): void{
    this.pagecarSubscription.push(this.service.getAll().subscribe(cards => {
      this.cardsBuy = cards
    }));
  } 


  ngOnDestroy(){
    this.pagecarSubscription.forEach(s => s.unsubscribe())
  }

}
