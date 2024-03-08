import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopeurComponent } from './developeur.component';

describe('DevelopeurComponent', () => {
  let component: DevelopeurComponent;
  let fixture: ComponentFixture<DevelopeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
