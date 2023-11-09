import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() menu = "";
  @Output() choice = new EventEmitter();

  public setMenu(value: string) {
    this.choice.emit(value);
    this.menu = value;
  }
}
