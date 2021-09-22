import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorizmComponent } from './algorizm.component';

describe('AlgorizmComponent', () => {
  let component: AlgorizmComponent;
  let fixture: ComponentFixture<AlgorizmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorizmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorizmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
