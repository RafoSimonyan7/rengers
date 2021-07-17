import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-buttons',
  templateUrl: './add-buttons.component.html',
  styleUrls: ['./add-buttons.component.scss']
})
export class AddButtonsComponent implements OnInit {
  renger1 = 0;
  renger2 = 0;

  firstRanger() {
    this.renger1++;
    console.log('Jack', this.renger1)
  }
  secondRenger() {
    this.renger2++;
    console.log('John', this.renger2)
  }

  rengersLife() {
    console.log('Jack\'s life is:', this.renger1 + ' and John\'s life is', this.renger2)
  }

  stop () {
    let winner = '';
    if (this.renger1 > this.renger2) {
      winner = 'Jack win'
    } else if (this.renger1 === this.renger2) {
      winner = 'the match ended in a draw'
    } else {
      winner = 'John win'
    }
    return setTimeout(() => {
      alert(winner);
      this.renger1 = 0;
      this.renger2 = 0
    }, 3000)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
