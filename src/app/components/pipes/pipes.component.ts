import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someText = "TEXT HERE";
  today = new Date();
  currency = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
