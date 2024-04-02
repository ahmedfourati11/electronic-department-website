import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvReuDepComponent } from './pv-reu-dep.component';

describe('PvReuDepComponent', () => {
  let component: PvReuDepComponent;
  let fixture: ComponentFixture<PvReuDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvReuDepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PvReuDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
