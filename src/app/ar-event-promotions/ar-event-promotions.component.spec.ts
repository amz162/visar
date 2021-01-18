import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArEventPromotionsComponent } from './ar-event-promotions.component';

describe('ArEventPromotionsComponent', () => {
  let component: ArEventPromotionsComponent;
  let fixture: ComponentFixture<ArEventPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArEventPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArEventPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
