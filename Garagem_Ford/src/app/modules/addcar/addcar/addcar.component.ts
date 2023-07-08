import { Component, OnInit } from '@angular/core';
import { CarrosService } from 'src/app/core/services/carros.service';

import { Card } from 'src/app/core/models/card.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.scss']
})
export class AddcarComponent implements OnInit{

  constructor(private service: CarrosService){}

  addcarSubscription: Subscription[] = [];

  ngOnInit(): void {
    
  }

  car: Card = {
    id: 0,
    model: "",
    brand: "",
    color: "",
    year: 0,
    price: 0,
    urlImage: "",
    status: "BUY",
    fuel: "",
    armored: false,
    power: 0,
    transmission: ""
  }

  newCar(){
    this.addcarSubscription.push(this.service.add(this.car).subscribe());
    this.car = {
      id: 0,
      model: "",
      brand: "",
      color: "",
      year: 0,
      price: 0,
      urlImage: "",
      status: "BUY",
      fuel: "",
      armored: false,
      power: 0,
      transmission: ""
    }
  }

  ngOnDistroy(){
    this.addcarSubscription.forEach(s => s.unsubscribe())
  }
}

