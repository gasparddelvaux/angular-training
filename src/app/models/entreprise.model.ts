import { Adresse } from "./adresse.model";

export interface Entreprise {
  nom: string;
  adresse?: Adresse;
  affaire: number;
  secteur: string;
}