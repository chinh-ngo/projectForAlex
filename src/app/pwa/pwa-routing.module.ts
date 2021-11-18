import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PwaComponent } from './pwa.component';

const routes: Routes = [
  {
    path: '',
    component: PwaComponent,
    children: [
      { path: '', redirectTo: 'booking-success', pathMatch: 'full' },
      {
        path: 'booking-success',
        loadChildren: () =>
          import('./booking-success/bookingsuccess.module').then((m) => m.BookingSuccessModule),
      },
      {
        path: 'emergency-profile',
        loadChildren: () =>
          import('./emergency-profile/emergencyprofile.module').then((m) => m.EmergencyProfileModule),
      },
      {
        path: 'patient-profile',
        loadChildren: () =>
          import('./patient-profile/patientprofile.module').then((m) => m.PatientProfileModule),
      },
      {
        path: 'search-doctor',
        loadChildren: () =>
          import('./search-doctor/searchdoctor.module').then((m) => m.SearchDoctorModule),
      },
      {
        path: 'telehealth-profile',
        loadChildren: () =>
          import('./telehealth-profile/telehealthprofile.module').then((m) => m.TeleHealthProfileModule),
      },
      {
        path: 'ucc',
        loadChildren: () =>
          import('./ucc-profile/ucc.module').then((m) => m.UccModule),
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwaRoutingModule {}
