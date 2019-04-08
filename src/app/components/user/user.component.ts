import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
    user: User;

    constructor() {
    }

    ngOnInit() {
        this.user = {
            firstName: 'Bob',
            lastName: 'Villa',
            age: 10,
            address: {
                street: '123 Sesame',
                city: 'Lvll',
                state: 'KY'
            }
        }
        this.sayHello(); 
    }

    sayHello() {
        console.log(`hello from ${this.user.firstName} who lives at ${this.user.address.street}`);
    }
}

