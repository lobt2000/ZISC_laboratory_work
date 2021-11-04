import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillCodeComponent } from './hill-code.component';

describe('HillCodeComponent', () => {
  let component: HillCodeComponent;
  let fixture: ComponentFixture<HillCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HillCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HillCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
