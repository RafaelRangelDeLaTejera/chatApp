import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <section class="search-section">
    <div>
      <input type="text" placeholder="Find project">
      <button class="primary" type="button">Search</button>
    </div>
  </section>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
        
}
