import { Component, OnInit } from '@angular/core';
import { rengers } from '../rengers';

@Component({
  selector: 'app-add-rengers',
  templateUrl: './add-rengers.component.html',
  styleUrls: ['./add-rengers.component.scss']
})
export class AddRengersComponent implements OnInit {
  rengers = rengers;

  constructor() { }

  ngOnInit(): void {
  }

}
