import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecarComponent } from './pagecar.component';

describe('PagecarComponent', () => {
  let component: PagecarComponent;
  let fixture: ComponentFixture<PagecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagecarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
