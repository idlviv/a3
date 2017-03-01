import { Component } from '@angular/core';
// import { PostsService } from '../services/posts.service';

interface IAddress {
  city: string;
  street: string;
}

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>E-mail </strong>{{email}}</p>
    <p><strong>Address </strong></p> 
    <p>City: {{address.city}}</p>
    <p>Street: {{address.street}}</p>
    <button (click)="toggleHobbies()">{{showHobbies ? 'Hide hobbies' : 'Show hobbies'}}</button>
    <div *ngIf="showHobbies">
      <h3>Hobbies</h3>
      <ul >
        <li *ngFor="let hobby of hobbies; let i = index">{{hobby}} <button (click)="delHobbie(index)">del</button></li>
      </ul>
      <form (submit)="addHobbie(hobbie.value)">
        <label name="label0">Append hobbie </label><br/>
        <input type="text" #hobbie>
      </form>
    </div>
    <form >
      <label name="label1">Name: </label><br/>
      <input type="text" name="name" [(ngModel)]="name"><br/>
      <label name="label2">Email </label><br/>
      <input type="text" name="email" [(ngModel)]="email"><br/>
    </form>
`,
})
export class UserComponent {
  name: string;
  email: string;
  address: IAddress;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'Angular';
    this.email = 'e@mail.com';
    this.address = {
      city: 'Lviv',
      street: 'Street'
    };
    this.hobbies = ['sport', 'travel'];
    this.showHobbies = false;
  }

  toggleHobbies() {
    return this.showHobbies = !this.showHobbies;
  }

  addHobbie(h: any) {
    this.hobbies.push(h)
  }

  delHobbie(i: any) {
    this.hobbies.splice(i, 1);
    // this.hobbies.splice(this.hobbies.indexOf(i),1);
  }
}
