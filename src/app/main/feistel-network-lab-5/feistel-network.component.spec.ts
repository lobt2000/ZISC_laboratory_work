import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeistelNetworkComponent } from './feistel-network.component';

describe('FeistelNetworkComponent', () => {
  let component: FeistelNetworkComponent;
  let fixture: ComponentFixture<FeistelNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeistelNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeistelNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
