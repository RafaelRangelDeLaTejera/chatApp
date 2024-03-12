import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<main>
  <h1>The Rafa chat app</h1>
  <section class="content">
    <app-home></app-home>
  </section>
</main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';

  public userList: Array<String>;

  constructor(){
    this.userList = [];
  }

  public fetchUsers(){

  }
}
