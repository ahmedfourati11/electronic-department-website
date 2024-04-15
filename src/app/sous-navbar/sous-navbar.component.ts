import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemObsRecComponent } from '../dem-obs-rec/dem-obs-rec.component';

@Component({
  selector: 'app-sous-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sous-navbar.component.html',
  styleUrl: './sous-navbar.component.css'
})
export class SousNavbarComponent {

}
