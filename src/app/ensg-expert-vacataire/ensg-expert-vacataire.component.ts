import { Component , OnInit } from '@angular/core';
import { SousNavListeEnsgComponent } from '../sous-nav-liste-ensg/sous-nav-liste-ensg.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ensg-expert-vacataire',
  standalone: true,
  imports: [SousNavListeEnsgComponent,CommonModule,FormsModule],
  templateUrl: './ensg-expert-vacataire.component.html',
  styleUrl: './ensg-expert-vacataire.component.css'
})
export class EnsgExpertVacataireComponent implements OnInit{


  showDescriptions: boolean[] = [];
  rotatedStates: boolean[] = [];
  searchTerm: string = '';

toggleDescription(index: number) {
    this.showDescriptions[index] = !this.showDescriptions[index];
}

rotateImage(index: number) {
    this.rotatedStates[index] = !this.rotatedStates[index];
}


// Recherche 

enseignants: any[] = [
  { nomPrenom: 'YAICH Mohamed', grade: 'Expert', email: 'yaich_fr2000@yahoo.fr' ,linkedin :'https://www.linkedin.com/in/mohamed-yaich-43a48622/' ,description: ["- TP assurés : " ,"* Alimentation et GE pour SE" , "* Convertisseur statique" , "* Diagnostique intelligent des Véhicules Modernes" , "* Electronique de puissance"]},

  { nomPrenom: 'FEKI Oussama', grade: 'Expert', email: 'feki.oussama@gmail.com',linkedin :'https://www.linkedin.com/in/feki-oussama-8a564626/' ,description:["- TP assurés :" ,"* Objets Connectés"	,"* Systèmes embarqués communicants" , "* IA & Machine Learning" , "* Mini projet Systèmes Embarqués","* Mini projet Developpement d'un système intelligent","* LINUX Embarqué & ROS"	, "* SOC&Co design" , "* Conception multitâche et OS temps réel embarqués" , "* Architecture et Programation  des Systèmes IoT"]},

  { nomPrenom: 'FAKHFAKH Ibtissem', grade: 'Expert', email: 'ibtissem_fakhfakh@yahoo.fr',linkedin:'https://www.linkedin.com/in/ibtissem-fakhfakh-477aa4a6/' ,description:["- Cours assurés :", "* Management d'equipe et leadership"	, "* Management" ]},

  { nomPrenom: 'KAMMOUN YENGUI Nouha', grade: 'Expert', email: 'nouha.yangui@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/nouha-kammoun-a2544333/' ,description:["- Cours assurés :" ,"* Entrepeneuriat et Business Model" , "* Scrum et leadership" , "* Management d'équipe et leadership" , "* Management de l'entreprise"]},

  { nomPrenom: 'TAKTAK Morched', grade: 'Expert', email: '***********' ,linkedin:'',description:["- Cours assurés :", "* Droit de travail et Sécurité sociale"]},

  { nomPrenom: 'HAJ KACEM Bassem', grade: 'Vacataire', email: 'bassem.hadjkacem@enetcom.usf.tn' ,linkedin:'',description:["- Cours assurés :","* Système d'exploitation embarqué et TR","* Conception multitâche et OS temps réel embarqués" ,"- TP assurés :","* Mini Projet Programmation Mobile pour IoT "]},

  { nomPrenom: 'HAMMAMI Ahmed', grade: 'Vacataire', email: 'ahmed.hammami2109@gmail.com' ,linkedin:'',description:["- Cours assurés :","* Dynamique des structures","* Matériaux et technologies de fabrication pour prototypage numérique","- TP assurés : ","* Auto","* Dynamique des structures","* Véhicules électriques Intelligente","* Matériaux et technologies de fabrication pour prototypage numérique","* Conception mécanique"]},

  { nomPrenom: 'JABEUR Karim', grade: 'Vacataire', email: 'karim.jaber@enetcom.usf.tn' ,linkedin:'',description:["- TP assurés :" , "* Atelier Electronique médicale"	, "* Conception HW/SW &SoCs","* Chaine d'acquisition"]},

  { nomPrenom: 'KAMMOUN Mohamed', grade: 'Vacataire', email: 'mohamed.kammoun@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/mohamed-kammoun-17980075/' ,description:["- Cours assurés :", "* Management de l'entreprise"]},

  { nomPrenom: 'CHTOUROU Oumayma', grade: 'Vacataire', email: 'oumayma.chtourou@yahoo.fr' ,linkedin:'',description:["- Cours assurés :" ,"* Entrepeneuriat et Business plan"]},

  { nomPrenom: 'LAHIANI Sawssen', grade: 'Vacataire', email: 'sawssenlahiani@yahoo.fr',linkedin:'https://www.linkedin.com/in/sawssen-lahiani-68a28a19/' ,description:["- TP assurés :","* Electronique numérique","* Chaine d'acquisition"]},

  {nomPrenom: 'Ben Belgith Fatma', grade: 'Vacataire', email: 'fatmabelghithenis@gmail.com' ,linkedin:'',description:["- TP assurés :" , "* Circuit electrique"]},

  { nomPrenom: 'MASMOUDI Amina', grade: 'Vacataire', email:'amina.masmoudi@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/amina-masmoudi-614691b4/' ,description:["- Cours assurés :" , "* Préparation à la certification Lean Six Sigma" , "* Entrepeneuriat et Business plan","* Entrepeneuriat et Business Model"	, "*  Scrum et leadership"]},

  { nomPrenom: 'FANDRI Dalia', grade: 'Vacataire', email: 'dalia.fendri@enetcom.usf.tn' ,linkedin:'',description:["- TP assurés :" ,"* Architecture des ordinateurs"	, "* POO C++"]},

  { nomPrenom: 'BEN BELGACEM Marwa', grade: 'Vacataire', email: 'marouabenbelgacem@yahoo.fr' ,linkedin:'',description:["* - TP assurés :"	, "* Communication analogique"]},

  { nomPrenom: 'GASSARA Khalil', grade: 'Vacataire', email: 'khalil.gassaraa@gmail.com' ,linkedin:'',description:["- TP assurés :" , "* Réseaux de capteurs sans fil"]},

  { nomPrenom: 'SBOUII Mouldi', grade: 'Vacataire', email: 'mouldi.sbouii@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/mouldi-sboui-73694a198/' ,description:["- Cours assurés :" ,"* Gestion d'entreprise"	, "* Entrepreneuriat et Business Model"	, "* Management d'équipe et leadership"]},

  { nomPrenom: 'DAMMEK Mouna', grade: 'Vacataire', email: 'Dammak.mouna@gmail.com' ,linkedin:'',description:["- TP assurés :" ,"* Traitement de signal"]},

  { nomPrenom: 'BELAAJ Oumayma', grade: 'Vacataire', email: 'bellaj_omaya@hotmail.fr' ,linkedin:'',description:["- TP assuré :" , "* Techniques d’optimisation"]},

  { nomPrenom: 'GARGOURI Nourhene', grade: 'Vacataire',linkedin:'', email: 'norhene.gargouri@gmail.com ' ,description:["- TP assuré :" , "* Traitement de signal"]},

  { nomPrenom: 'ZOUARI Mouna', grade: 'Vacataire', email: 'mouna.zouari@crns.tn',linkedin:'https://www.linkedin.com/in/mouna-zouari-41815b120/' ,description:["- TP assurés :" ,"* Electronique de communication d’objets connectés"]},

  { nomPrenom: 'SAHNOUN Mouna', grade: 'Vacataire', email: 'mounasahnoun2@gmail.com' ,linkedin:'',description:["- TP assurés :" , "* Traitement du signal analogique et numérique" , "* Traitement de signal"	, "* Théorie de l'information"]},

  { nomPrenom: 'KAMMOUN Kaouther', grade: 'Vacataire', email: 'Kaouther.kammoun@yahoo.fr' ,linkedin:'',description:["- Cours assurés :" ,"* Réseaux de capteurs sans fil"	, "* Communication analogique" , "- TP assurés :", "* Réseau de capteurs sans fil"	, "* Préparation à la certification NI"]},

  { nomPrenom: 'HACHICHA Marwa', grade: 'Vacataire', email: 'hachichamarwa91@gmail.com',linkedin:'https://www.linkedin.com/in/marwa-hachicha-720aaa90/' ,description:["- Cours assurés :","*  Antennes et Propagation","* Electrostatique et magnestostatique","* Physique des SC et des composants","* Electromagnétisme","- TP assurés :","* Thermodynamique"]},

  { nomPrenom: 'EL MANSOURI Nabila', grade: 'Vacataire', email: 'nabila.elmansouri@gmail.com' ,linkedin:'',description:[ "TP assuré :", "Mathématiques Appliquées"]},

  { nomPrenom: 'BEN AYED Hanene', grade: 'Vacataire', email: 'benayed.hanen@yahoo.fr' ,linkedin:'',description:["- TP assurés :" , "* Fonctions d'électronique  analogique"	,"* Fonction d'électronique numérique" ,"* Electronique analogique 2"	, "* Electronique générale + NP"	, "* Electronique numérique"	, "* Systèmes logiques 1" , "* Systèmes logiques 2","* Electronique modulaire" , "* Electronique de commutation"	, "* Inst & CM"]},

  { nomPrenom: 'DHIEB Youssef', grade: 'Contractuel', email: 'youssef.dhieb@enetcom.usf.tn',linkedin:'https://www.linkedin.com/in/youssef-dhieb-281302b3/' ,description:["* - TP assurés :"	, "* Systèmes embarqués automobile" , "* Electronique et multiplexage dans les systemes de Trans" ,"* Systèmes embarqués  pour les systémes de Transport" ,"* Diagnostique intelligent des Véhicules Modernes", "* Convertisseurs intelligents", "* Convertisseurs statiques"]},

  { nomPrenom: 'AYED Amine', grade: 'Contractuel', email: 'amine.ayed@isecs.rnu.tn ' ,linkedin:'',description:["- TP assurés :" , "* Electronique analogique 2"]},

  { nomPrenom: 'JARBOUI Noura', grade: 'Contractuel', email: 'nourajarboui@yahoo.fr' ,linkedin:'',description:["- Cours assurés :","* Leadership et animation d'équipes","* Gestion d’entreprise de l'entreprise","* Management de l'entreprise","* Préparation à la certification Lean Six Sigma"]},

  { nomPrenom: 'KAMMOUN Manel', grade: 'Contractuel', email: 'manelkammounenis@gmail.com ',linkedin:'https://www.linkedin.com/in/manel-kammoun-09a96965/' ,description:["- TP assurés :","* Circuit électrique","* Electronique numérique","* Electronique pour les télécommunications","* Communication analogique","* Systèmes logiques 1","* Systèmes logiques 2","* Fonctions d'électronique numérique","* Electronique Modulaire","* Electronique analogique 1","* Architecture des Microcontrôleurs"]}
];

enseignantsOriginaux: any[] = [
 
];

constructor() {}

ngOnInit() {
  // Copie la liste originale des enseignants lors de l'initialisation du composant
  this.enseignantsOriginaux = [...this.enseignants];
}

onSearch() {
  if (this.searchTerm.trim() === '') {
    console.log("Aucun terme de recherche, réinitialisation de la liste des enseignants.");
    // Réinitialise la liste des enseignants à la liste originale
    this.enseignants = [...this.enseignantsOriginaux];
  } else {
    const searchLower = this.searchTerm.toLowerCase();
    // Filtre la liste des enseignants en fonction du terme de recherche
    this.enseignants = this.enseignantsOriginaux.filter(enseignant =>
      enseignant.nomPrenom.toLowerCase().includes(searchLower)
    );
  }


} }