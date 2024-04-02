import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncDipComponent } from './anc-dip.component';

describe('AncDipComponent', () => {
  let component: AncDipComponent;
  let fixture: ComponentFixture<AncDipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AncDipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AncDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
