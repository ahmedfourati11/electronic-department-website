import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsgExpertVacataireComponent } from './ensg-expert-vacataire.component';

describe('EnsgExpertVacataireComponent', () => {
  let component: EnsgExpertVacataireComponent;
  let fixture: ComponentFixture<EnsgExpertVacataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsgExpertVacataireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsgExpertVacataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
