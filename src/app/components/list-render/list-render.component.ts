import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal.interface';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 5},
    {name: "Frida", type: "Dog", age: 2},
    {name: "Bob", type: "Horse", age: 3}
  ];

  animalDetails = " ";

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
  this.animalDetails = `Pet: ${animal.name} is ${animal.age} years old!`
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.listService.remove(this.animals, animal);
  }

}
