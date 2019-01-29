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
  constructor(private messageService: MessagesService) { }
}
