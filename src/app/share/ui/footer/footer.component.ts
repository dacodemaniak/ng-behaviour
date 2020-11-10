import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../../services/behaviour.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public behaviourService: BehaviourService
  ) { }

  ngOnInit(): void {
  }

}
