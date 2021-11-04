import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StenographyComponent } from './stenography.component';

describe('StenographyComponent', () => {
  let component: StenographyComponent;
  let fixture: ComponentFixture<StenographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StenographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StenographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
