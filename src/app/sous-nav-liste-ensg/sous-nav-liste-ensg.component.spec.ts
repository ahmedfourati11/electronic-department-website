import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousNavListeEnsgComponent } from './sous-nav-liste-ensg.component';

describe('SousNavListeEnsgComponent', () => {
  let component: SousNavListeEnsgComponent;
  let fixture: ComponentFixture<SousNavListeEnsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousNavListeEnsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SousNavListeEnsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
