import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>E-mail </strong>{{email}}</p>
    <p><strong>Address </strong></p> 
    <p>City: {{address.city}}</p>
    <p>Street: {{address.street}}</p>
`,
})
export class AppComponent  {
  name = 'Angular';
  email = 'e@mail.com';
  address = {
    city: 'Lviv',
    street: 'Street'
  };
}
