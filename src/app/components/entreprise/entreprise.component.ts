import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entreprise } from '../../models/entreprise.model';
import { AdresseComponent } from "../adresse/adresse.component";

@Component({
    selector: 'app-entreprise',
    standalone: true,
    templateUrl: './entreprise.component.html',
    styleUrl: './entreprise.component.scss',
    imports: [CommonModule, AdresseComponent]
})
export class EntrepriseComponent {
  public entreprises: Entreprise[] = [
    {
        nom: "ABC Entreprise",
        affaire: 1000000,
        secteur: "Technologie",
        adresse: {
            rue: "Rue de la Loi",
            numero: 100,
            codePostal: 1000,
            ville: "Bruxelles"
        }
    },
    {
        nom: "XYZ Corporation",
        affaire: 750000,
        secteur: "Finance",
        adresse: {
            rue: "Avenue Louise",
            numero: 200,
            codePostal: 1050,
            ville: "Ixelles"
        }
    },
    {
        nom: "BetaTech",
        affaire: 500000,
        secteur: "Santé",
        adresse: {
            rue: "Rue des Capucins",
            numero: 50,
            codePostal: 5000,
            ville: "Namur"
        }
    },
    {
        nom: "GreenSolutions",
        affaire: 200000,
        secteur: "Écologie",
        adresse: {
            rue: "Rue des Écologistes",
            numero: 20,
            codePostal: 6000,
            ville: "Charleroi"
        }
    },
    {
        nom: "BuildIt Inc.",
        affaire: 3000000,
        secteur: "Construction",
        adresse: {
            rue: "Rue de la Construction",
            numero: 10,
            codePostal: 7000,
            ville: "Mons"
        }
    },
    {
        nom: "FoodDelights",
        affaire: 400000,
        secteur: "Restauration",
        adresse: {
            rue: "Rue de la Gourmandise",
            numero: 25,
            codePostal: 2000,
            ville: "Anvers"
        }
    },
    {
        nom: "EduCorp",
        affaire: 600000,
        secteur: "Éducation",
        adresse: {
            rue: "Rue de l'Éducation",
            numero: 30,
            codePostal: 3500,
            ville: "Hasselt"
        }
    },
    {
        nom: "FashionWorld",
        affaire: 900000,
        secteur: "Mode",
        adresse: {
            rue: "Rue de la Mode",
            numero: 15,
            codePostal: 9000,
            ville: "Gent"
        }
    },
    {
        nom: "MediCare",
        affaire: 1200000,
        secteur: "Santé",
        adresse: {
            rue: "Rue de la Santé",
            numero: 8,
            codePostal: 6200,
            ville: "Châtelet"
        }
    },
    {
        nom: "TechWorld",
        affaire: 1800000,
        secteur: "Technologie",
        adresse: {
            rue: "Rue de la Technologie",
            numero: 42,
            codePostal: 8000,
            ville: "Bruges"
        }
    }
];
}