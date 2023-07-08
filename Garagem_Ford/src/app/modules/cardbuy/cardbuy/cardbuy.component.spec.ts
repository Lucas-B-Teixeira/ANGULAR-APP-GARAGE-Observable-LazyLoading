import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbuyComponent } from './cardbuy.component';

describe('CardbuyComponent', () => {
  let component: CardbuyComponent;
  let fixture: ComponentFixture<CardbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
