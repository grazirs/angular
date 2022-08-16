import { Component, OnInit, Input } from '@angular/core';
import { UserData } from 'src/app/interfaces/user-data.interface';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''
  @Input() userData: UserData = { email: '', role: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
