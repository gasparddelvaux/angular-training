import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PersonneComponent } from './components/personne/personne.component';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonneComponent, EntrepriseComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular17';
  
  public menu = '';

  setMenuInApp(value: string) {
    this.menu = value;
  }
}
