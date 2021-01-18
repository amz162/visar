import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArGamesComponent } from './ar-games.component';

describe('ArGamesComponent', () => {
  let component: ArGamesComponent;
  let fixture: ComponentFixture<ArGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
