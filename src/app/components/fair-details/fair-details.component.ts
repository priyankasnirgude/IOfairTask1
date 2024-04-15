import { Component, Input, OnInit } from '@angular/core';
import { IFair } from 'src/app/models/fairs';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {

  @Input() getfairDetails !: IFair;
  constructor() { }

  ngOnInit(): void {
  }

}
