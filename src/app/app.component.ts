import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DepartementComponent } from './departement/departement.component';
import { FormationComponent } from './formation/formation.component';
import { SalleComponent } from './salle/salle.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { AncDipComponent } from './anc-dip/anc-dip.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerifVisageComponent } from './verif-visage/verif-visage.component';
import { PreInsComponent } from './pre-ins/pre-ins.component';
import { SousNavbarComponent } from './sous-navbar/sous-navbar.component';
import { DemObsRecComponent } from './dem-obs-rec/dem-obs-rec.component';
import { FormsModule } from '@angular/forms';
import { SousNavListeEnsgComponent } from './sous-nav-liste-ensg/sous-nav-liste-ensg.component';
import { EnsgExpertVacataireComponent } from './ensg-expert-vacataire/ensg-expert-vacataire.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,FooterComponent,DepartementComponent,FormationComponent,SalleComponent,EnseignantsComponent,ActualitesComponent,PartenairesComponent,AncDipComponent,EtudiantComponent,SignInComponent,VerifVisageComponent,PreInsComponent,SousNavbarComponent,DemObsRecComponent,FormsModule,CommonModule,SousNavListeEnsgComponent,EnsgExpertVacataireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'Dash_Dep';



}
