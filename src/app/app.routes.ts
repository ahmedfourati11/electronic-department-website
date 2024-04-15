import { Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { FormationComponent } from './formation/formation.component';
import { SalleComponent } from './salle/salle.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { AncDipComponent } from './anc-dip/anc-dip.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PreInsComponent } from './pre-ins/pre-ins.component';
import { DemObsRecComponent } from './dem-obs-rec/dem-obs-rec.component';
import { Component } from '@angular/core';
import { EnsgExpertVacataireComponent } from './ensg-expert-vacataire/ensg-expert-vacataire.component';

export const routes: Routes = [

    {path:"",component:DepartementComponent},
    {path:"formation",component:FormationComponent},
    {path:"salle",component:SalleComponent},
    {path:"enseignants",component:EnseignantsComponent},
    {path:"actualites",component:ActualitesComponent},
    {path:"partenaires",component:PartenairesComponent},
    {path:"ancien_diplomes",component:AncDipComponent},
    {path:"etudiant",component:EtudiantComponent},
    {path:"sign_in",component:SignInComponent},
    {path:"pre-ins",component:PreInsComponent},
    {path:"dem-obs-rec",component:DemObsRecComponent},
    {path:"enseignants-Vacataire-expert",component:EnsgExpertVacataireComponent}
];