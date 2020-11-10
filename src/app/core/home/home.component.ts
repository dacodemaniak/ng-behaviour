import { Component, OnInit } from '@angular/core';
import { BehaviourService } from 'src/app/share/services/behaviour.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public behaviourService: BehaviourService
  ) { }

  ngOnInit(): void {
  }

  updateSubject(): void {
    this.behaviourService.subject$.next('I was changed')
  }

}
