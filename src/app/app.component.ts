import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2019,
  };

  miles: number;

  onNameChange(val: string) {
    this.name = val;
  }

  onDateChange(val: string) {
    this.date = val;
  }

  onAmountChange(val: string) {
    this.amount = parseFloat(val);
  }

  onHeightChange(val: string) {
    this.height = parseFloat(val);
  }

  onMilesChange(val: string) {
    this.miles = parseFloat(val);
  }
}
