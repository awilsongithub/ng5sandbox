import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    age: null,
    address: {
      street: "",
      city: "",
      state: "",
      zip: ""
    }
  };
  data: User[];
  users: User[] = [];
  loaded: boolean = false;
  showUserForm: boolean = false;
  enableAdd: boolean = false;

  anotherUser: User = {
    firstName: "big bird",
    lastName: "Villa",
    age: 10,
    hide: true
  };

  constructor() {
    console.log("construct!...");
  }

  ngOnInit() {
    console.log("OnInit!...");

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
          state: "KY",
          zip: ""
        },
        // image: "http://lorempixel.com/600/600/people/3",
        isActive: true,
        // balance: 100,
        registered: new Date("10/01/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "ernie",
        lastName: "Villa",
        age: 10,
        address: {
          street: "123 Sesame",
          city: "Lvll",
          state: "KY",
          zip: ""
        },
        // image: "http://lorempixel.com/600/600/people/2",
        // balance: 50000,
        registered: new Date("03/11/2017 04:50:00"),
        hide: true
      },
      {
        firstName: "elmo",
        lastName: "Villa",
        age: 10,
        address: {
          street: "123 Sesame",
          city: "Lvll",
          state: "KY",
          zip: ""
        },
        // image: "http://lorempixel.com/600/600/people/1",
        // balance: 100,
        registered: new Date("10/01/2018 08:30:00"),
        hide: true
      }
    ];
  } /* end of ngOnInit */

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user); // ngModel bound user
    this.user = {
      firstName: "",
      lastName: "",
      age: null,
      address: {
        street: "",
        city: "",
        state: "KY",
        zip: ""
      }
    };
  }

  toggleHide(user) {
    user.hide = !user.hide;
  }

  fireEvent(e) {
    console.log(e.target.value); // input string
    console.log(e.type); // keydown
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
}
