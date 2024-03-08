import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformtestComponent } from './reactiveformtest.component';

describe('ReactiveformtestComponent', () => {
  let component: ReactiveformtestComponent;
  let fixture: ComponentFixture<ReactiveformtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveformtestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveformtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
