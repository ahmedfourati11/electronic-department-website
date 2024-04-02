import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousNavbarComponent } from './sous-navbar.component';

describe('SousNavbarComponent', () => {
  let component: SousNavbarComponent;
  let fixture: ComponentFixture<SousNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SousNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
