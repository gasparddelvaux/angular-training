import { Adresse } from "./adresse.model";

export interface Personne {
  nom: string;
  prenom: string;
  adresse: Adresse;
  activite: string;
}