import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './sample_heroes';
import {Observable, of} from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id:number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id= ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor(private messageService: MessagesService) { }
}
