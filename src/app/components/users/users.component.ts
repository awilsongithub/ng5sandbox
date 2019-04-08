import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  showDetails: boolean = false;
  loaded: boolean = false;

  anotherUser: User = {
    firstName: 'big bird',
    lastName: 'Villa',
    age: 10,
    address: {
      street: '123 Sesame',
      city: 'Lvll',
      state: 'KY'
    }
  }

  constructor() { 
    console.log('construct!...')
  }

  ngOnInit() {
    console.log('OnInit!...');

    setTimeout(() => {
      this.loaded = true
    }, 2000);

    this.users = [
      {
        firstName: 'bert',
        lastName: 'villa',
        age: 10,
        address: {
          street: '123 Sesame',
          city: 'Lvll',
          state: 'KY',
        }
      },
      {
        firstName: 'ernie',
        lastName: 'Villa',
        age: 10,
        address: {
          street: '123 Sesame',
          city: 'Lvll',
          state: 'KY'
        }
      },
      {
        firstName: 'elmo',
        lastName: 'Villa',
        age: 10,
        address: {
          street: '123 Sesame',
          city: 'Lvll',
          state: 'KY'
        }
      }

    ]
  } /* end of ngOnInit */

  addUser(user: User) {
    this.users.push(user);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
