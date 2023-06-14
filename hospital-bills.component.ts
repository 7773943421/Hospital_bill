import { Component } from '@angular/core';

interface Patient {
  name: string;
  billAmount: number;
  // Additional patient properties can be added here
}

@Component({
  selector: 'app-hospital-bills',
  templateUrl: './hospital-bills.component.html',
  styleUrls: ['./hospital-bills.component.css']
})
export class HospitalBillsComponent {
  selectedTab: string;
  patients: Patient[];
  selectedPatient: Patient;

  constructor() {
    this.selectedTab = 'Dashboard'; // Set the initial selected tab
    this.patients = [
      { name: 'John Doe', billAmount: 500 },
      { name: 'Jane Smith', billAmount: 750 },
      // Additional patient data can be added here
    ];
    this.selectedPatient = null;
  }

  selectDashboard() {
    this.selectedTab = 'Dashboard';
  }

  selectPatient() {
    this.selectedTab = 'Patient';
  }

  selectAppointment() {
    this.selectedTab = 'Appointment';
  }

  selectBilling() {
    this.selectedTab = 'Billing';
  }

  showPatientBill(patient: Patient) {
    this.selectedPatient = patient;
  }
}