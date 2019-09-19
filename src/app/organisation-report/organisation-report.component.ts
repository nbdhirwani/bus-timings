import { Component, OnInit } from '@angular/core';
import busServicesData from '../../assets/data/bus-services-data.json';

@Component({
  selector: 'app-organisation-report',
  templateUrl: './organisation-report.component.html',
  styleUrls: ['./organisation-report.component.css']
})
export class OrganisationReportComponent implements OnInit {

  busTimings: any = busServicesData;

  constructor() { }

  ngOnInit() {
  }

}
