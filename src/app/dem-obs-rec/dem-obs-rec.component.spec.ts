import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemObsRecComponent } from './dem-obs-rec.component';

describe('DemObsRecComponent', () => {
  let component: DemObsRecComponent;
  let fixture: ComponentFixture<DemObsRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemObsRecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemObsRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
