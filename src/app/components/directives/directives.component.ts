import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size: number = 40;
  font: string = 'Verdana';
  color: string = 'orange';
  classes: Array<String> = ['small-title', 'green-title'];

  constructor() { }

  ngOnInit(): void {
  }

}
