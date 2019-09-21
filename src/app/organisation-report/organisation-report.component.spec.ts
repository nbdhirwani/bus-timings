import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationReportComponent } from './organisation-report.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NotesComponent } from '../notes/notes.component'

describe('OrganisationReportComponent', () => {
  let component: OrganisationReportComponent;
  let fixture: ComponentFixture<OrganisationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatExpansionModule,
        BrowserAnimationsModule
      ],
      declarations: [ OrganisationReportComponent, NotesComponent ]
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
