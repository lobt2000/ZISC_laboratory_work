import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodeCezarComponent } from './decode-cezar.component';

describe('DecodeCezarComponent', () => {
  let component: DecodeCezarComponent;
  let fixture: ComponentFixture<DecodeCezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodeCezarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecodeCezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
