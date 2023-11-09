import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../models/personne.model';
import { AdresseComponent } from "../adresse/adresse.component";

@Component({
    selector: 'app-personne',
    standalone: true,
    templateUrl: './personne.component.html',
    styleUrl: './personne.component.scss',
    imports: [CommonModule, AdresseComponent]
})
export class PersonneComponent {
  public personnes: Personne[] = [
    {
        nom: "Dupont",
        prenom: "Jean",
        activite: "Informatique",
        adresse: {
            rue: "Rue de la Loi",
            numero: 100,
            codePostal: 1000,
            ville: "Bruxelles"
        }
    },
    {
        nom: "Martin",
        prenom: "Sophie",
        activite: "Finance",
        adresse: {
            rue: "Avenue Louise",
            numero: 200,
            codePostal: 1050,
            ville: "Ixelles"
        }
    },
    {
        nom: "Dubois",
        prenom: "Pierre",
        activite: "Santé",
        adresse: {
            rue: "Rue des Capucins",
            numero: 50,
            codePostal: 5000,
            ville: "Namur"
        }
    },
    {
        nom: "Lambert",
        prenom: "Isabelle",
        activite: "Éducation",
        adresse: {
            rue: "Rue des Wallons",
            numero: 30,
            codePostal: 6000,
            ville: "Charleroi"
        }
    },
    {
        nom: "Leclerc",
        prenom: "Michel",
        activite: "Ingénierie",
        adresse: {
            rue: "Rue Royale",
            numero: 10,
            codePostal: 7000,
            ville: "Mons"
        }
    },
    {
        nom: "Lefebvre",
        prenom: "Marie",
        activite: "Art",
        adresse: {
            rue: "Rue des Arts",
            numero: 5,
            codePostal: 9000,
            ville: "Gent"
        }
    },
    {
        nom: "Jacobs",
        prenom: "Luc",
        activite: "Marketing",
        adresse: {
            rue: "Rue de la Vieille Halle aux Blés",
            numero: 15,
            codePostal: 8000,
            ville: "Bruges"
        }
    },
    {
        nom: "Smet",
        prenom: "Anne",
        activite: "Restauration",
        adresse: {
            rue: "Rue des Bouchers",
            numero: 25,
            codePostal: 2000,
            ville: "Anvers"
        }
    },
    {
        nom: "Willems",
        prenom: "Thomas",
        activite: "Construction",
        adresse: {
            rue: "Rue des Charpentiers",
            numero: 8,
            codePostal: 3500,
            ville: "Hasselt"
        }
    },
    {
        nom: "Noël",
        prenom: "Julie",
        activite: "Mode",
        adresse: {
            rue: "Rue du Faubourg de France",
            numero: 42,
            codePostal: 6200,
            ville: "Châtelet"
        }
    }
];
}