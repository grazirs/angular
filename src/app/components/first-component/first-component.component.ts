import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Graziele'
  age: number = 27
  job: string = 'developer'
  hobbie: Array<string> = ['draw', 'swim', 'watch series']
  car: {
    model: string,
    year: number
  } = {
    model: 'Aygo',
    year: 2020
  }

  constructor() { }

  ngOnInit(): void {
  }

}
