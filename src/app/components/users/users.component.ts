import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data: User[];
  users: User[] = [];
  loaded: boolean = false;
  showDetails: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};

  anotherUser: User = {
    firstName: 'big bird',
    lastName: 'Villa',
    age: 10,
    address: {
      street: '123 Sesame',
      city: 'Lvll',
      state: 'KY'
    },
    image: 'http://lorempixel.com/600/600/people/4'
  }

  constructor() { 
    console.log('construct!...')
  }

  ngOnInit() {
    console.log('OnInit!...');

    setTimeout(() => {
      this.users = this.data;
      this.loaded = true;
    }, 2000);

    this.setCurrentClasses();

    this.data = [
      {
        firstName: "bert",
        lastName: "villa",
        age: 10,
        address: {
          street: "123 Sesame",
          city: "Lvll",
          state: "KY"
        },
        image: "http://lorempixel.com/600/600/people/3",
        isActive: true
      },
      {
        firstName: "ernie",
        lastName: "Villa",
        age: 10,
        address: {
          street: "123 Sesame",
          city: "Lvll",
          state: "KY"
        },
        image: "http://lorempixel.com/600/600/people/2"
      },
      {
        firstName: "elmo",
        lastName: "Villa",
        age: 10,
        address: {
          street: "123 Sesame",
          city: "Lvll",
          state: "KY"
        },
        image: "http://lorempixel.com/600/600/people/1"
      }
    ];

    this.setCurrentClasses();
  } /* end of ngOnInit */

  addUser(user: User) {
    this.users.push(user);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    }
  }

}
