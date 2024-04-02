import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInsComponent } from './pre-ins.component';

describe('PreInsComponent', () => {
  let component: PreInsComponent;
  let fixture: ComponentFixture<PreInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreInsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
