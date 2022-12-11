import { Component, OnInit } from '@angular/core';
import { Ship } from '../../models/ship';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  ship: Ship;


  constructor() {
    this.ship = new Ship('Serenity', 10, 100);
  }

  ngOnInit(): void {
  }

  public doDamage(){
    this.ship.computeLaserDamage(4);
  }

}
