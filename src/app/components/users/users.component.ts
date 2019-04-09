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

  anotherUser: User = {
    firstName: 'big bird',
    lastName: 'Villa',
    age: 10,
    // address: {
    //   street: '123 Sesame',
    //   city: 'Lvll',
    //   state: 'KY'
    // },
    showDetails: false
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
        // image: "http://lorempixel.com/600/600/people/3",
        isActive: true,
        // balance: 100,
        registered: new Date("10/01/2018 08:30:00"),
        showDetails: false
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
        // image: "http://lorempixel.com/600/600/people/2",
        // balance: 50000,
        registered: new Date("03/11/2017 04:50:00"),
        showDetails: false
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
        // image: "http://lorempixel.com/600/600/people/1",
        // balance: 100,
        registered: new Date("10/01/2018 08:30:00"),
        showDetails: false
      }
    ];

  } /* end of ngOnInit */

  addUser(user: User) {
    this.users.unshift(user);
  }

  toggleDetails(index) {
    console.log('toggle deets clicked with index: ', index)
    let user = this.users[index];
    if(user.address) {
      this.users[index].showDetails = !this.users[index].showDetails;
    } else {
      alert('user lacks all the deets');
    }

  }

  fireEvent(e) {
    this.addUser(this.anotherUser);
  }

}
