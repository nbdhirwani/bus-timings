import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationReportComponent } from './organisation-report.component';

describe('OrganisationReportComponent', () => {
  let component: OrganisationReportComponent;
  let fixture: ComponentFixture<OrganisationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
