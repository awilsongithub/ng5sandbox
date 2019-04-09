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
  showDetails: boolean = true;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

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
    this.setCurrentStyles();

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
        isActive: true,
        balance: 100,
        registered: new Date("10/01/2018 08:30:00")
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
        image: "http://lorempixel.com/600/600/people/2",
        balance: 50000,
        registered: new Date("03/11/2017 04:50:00")
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
        image: "http://lorempixel.com/600/600/people/1",
        balance: 100,
        registered: new Date("10/01/2018 08:30:00")
      }
    ];

    this.setCurrentClasses();
  } /* end of ngOnInit */

  addUser(user: User) {
    this.users.push(user);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.setCurrentStyles(); // update based on new value of showDetails
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    }
  }

  // set property of class to styles object 
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showDetails ? '0' : '40px',
      'color': this.showDetails ? '' : 'purple',
      'font-size': this.showDetails ? '' : '44px'
    }
  }

}
