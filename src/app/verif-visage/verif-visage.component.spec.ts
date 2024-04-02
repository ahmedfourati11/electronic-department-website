import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifVisageComponent } from './verif-visage.component';

describe('VerifVisageComponent', () => {
  let component: VerifVisageComponent;
  let fixture: ComponentFixture<VerifVisageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifVisageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifVisageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
