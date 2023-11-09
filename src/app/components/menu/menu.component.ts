import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() choice = new EventEmitter();

  menu = "";

  public setMenu(value: string) {
    this.choice.emit(value);
    this.menu = value;
  }
}
