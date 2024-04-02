import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvAutreComponent } from './pv-autre.component';

describe('PvAutreComponent', () => {
  let component: PvAutreComponent;
  let fixture: ComponentFixture<PvAutreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvAutreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PvAutreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
