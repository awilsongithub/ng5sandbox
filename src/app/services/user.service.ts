import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";

import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  data: Observable<Array<any>>; // observable arr of any type 

  constructor() {
    this.users = [
      {
        firstName: "bert",
        lastName: "villa",
        email: "bert@gmail.com",
        isActive: true,
        registered: new Date("10/01/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "ernie",
        lastName: "Villa",
        email: "ernie@gmail.com",
        isActive: true,
        registered: new Date("10/01/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "elmo",
        lastName: "Villa",
        email: "elmo@gmail.com",
        isActive: true,
        registered: new Date("10/01/2018 08:30:00"),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    console.log("fetching users from service");
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
