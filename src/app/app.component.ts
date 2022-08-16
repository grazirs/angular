import { Component } from '@angular/core';
import { UserData } from './interfaces/user-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'Peter'
  userData: UserData = {
    email: 'peter@email.com',
    role: 'admin'
  }
  title = 'angular';
}
