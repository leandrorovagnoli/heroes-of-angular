import { Injectable } from '@angular/core';
import { IHero } from '../interfaces/IHero';
import { HEROES } from '../heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { stringify } from '@angular/compiler/src/util';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  teste: string;

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<IHero> {
    const hero = of(HEROES.find(x => x.id === id))
    let heroName: string;
    hero.subscribe(x => heroName = x.name)

    this.messageService.add(`HeroService: fetched heroe: ${heroName} with id: ${id}`);
    return hero;
  }
}
