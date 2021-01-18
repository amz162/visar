import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArAdCampaignsComponent } from './ar-ad-campaigns.component';

describe('ArAdCampaignsComponent', () => {
  let component: ArAdCampaignsComponent;
  let fixture: ComponentFixture<ArAdCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArAdCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArAdCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
