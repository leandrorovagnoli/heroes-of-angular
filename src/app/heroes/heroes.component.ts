import { Component, OnInit } from '@angular/core';
import { IHero } from './interfaces/IHero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: IHero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
