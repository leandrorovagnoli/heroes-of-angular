import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../interfaces/IHero';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: IHero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(x => this.hero = x);
  }

  goBack(): void {
    this.location.back();
  }
}
