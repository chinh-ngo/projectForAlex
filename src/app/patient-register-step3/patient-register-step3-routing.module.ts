import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegisterStep3Component } from './patient-register-step3.component';

const routes: Routes = [{ path: '', component: PatientRegisterStep3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRegisterStep3RoutingModule { }
