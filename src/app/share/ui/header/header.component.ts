import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../../services/behaviour.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public behaviourService: BehaviourService
  ) { }

  ngOnInit(): void {
  }

}
