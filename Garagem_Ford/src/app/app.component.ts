import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 
export class AppComponent implements OnInit {
  title = 'Garagem_Ford';

  garageDisabled: boolean = true;
  buyCarDisabled: boolean = false;

  disabledGarage(): void{
    this.garageDisabled = false;
    this.buyCarDisabled = true;
  }

  disabledBuyCar(): void{
    this.buyCarDisabled = false;
    this.garageDisabled = true;
  }

  constructor() {}

  ngOnInit(): void {
     
  }
}
