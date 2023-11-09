import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Adresse } from '../../models/adresse.model';


@Component({
  selector: 'app-adresse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adresse.component.html',
  styleUrl: './adresse.component.scss'
})
export class AdresseComponent {
  @Input({ required: true }) adresse?: Adresse;
}