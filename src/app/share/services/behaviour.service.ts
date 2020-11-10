import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {
  public subject$: BehaviorSubject<string>

  constructor() { 
    this.subject$ = new BehaviorSubject<string>('Hello Behaviour Subject')
  }
}
