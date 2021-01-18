import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARFiltersComponent } from './ar-filters.component';

describe('ARFiltersComponent', () => {
  let component: ARFiltersComponent;
  let fixture: ComponentFixture<ARFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
