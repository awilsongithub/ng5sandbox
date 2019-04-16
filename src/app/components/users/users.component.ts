import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../models/User";
import { DataService } from "../../services/data.service";

// component decorator takes an object
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  // properties
  data: User[];
  users: User[];
  loaded: boolean = false;
  showUserForm: boolean = false;
  enableAdd: boolean = false;
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  // this decorator takes a string
  // TODO "form: any" specifies type: form: any???
  @ViewChild("userForm") form: any;

  // methods

  // private = only avail in class
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  } 

  // gets an object. destructure out these props
  // of User and boolean type
  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    console.log(value);
    if (!valid) {
      console.log("Form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);
      this.form.reset();
    }
  }
} // end class

/*================  
  old 
  ================== */

// addUser() {
//   this.user.isActive = true;
//   this.user.registered = new Date();
//   this.users.unshift(this.user); // ngModel bound user
//   this.user = {
//     firstName: "",
//     lastName: "",
//     email: ""
//   };
// }

// toggleHide(user) {
//   user.hide = !user.hide;
// }

// fireEvent(e) {
//   console.log(e.target.value); // input string
//   console.log(e.type); // keydown
// }

/*================  
  spreadsheet 
  ================== */

// findMatch(e) {
//   const cellNames: string[] = ["a1", "b1"];
//   console.log("value of keyup'd cell ", e.target.value);
//   let match: string;
//   let matchIndex: number;

//   // find cellname matching val of target
//   cellNames.forEach((name, index) => {
//     console.log(name);
//     if (name === e.target.value) {
//       match = name;
//       matchIndex = index;
//     }
//   });

//   this.a1 = this[match];

//   // if it found a match
//   if (match) {
//     console.log("matchh is", match); // a1 or b1 or undefined
//   } else {
//     console.log("no match found");
//   }
// }
