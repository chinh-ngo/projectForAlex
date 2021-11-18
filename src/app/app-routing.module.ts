import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home-slider-two/home-slider-two.module').then((m) => m.HomeSliderTwoModule),
  },
  {
    path: 'home-one',
    loadChildren: () =>
    import('./home-one/home-one.module').then((m) => m.HomeOneModule),
  },
  {
    path: 'home-two',
    loadChildren: () =>
    import('./home-two/home-two.module').then((m) => m.HomeTwoModule),
  },
  {
    path: 'home-slider-one',
    loadChildren: () =>
    import('./home-slider-one/home-slider-one.module').then((m) => m.HomeSliderOneModule),
  },
  {
    path: 'home-slider-two',
    loadChildren: () =>
    import('./home-slider-two/home-slider-two.module').then((m) => m.HomeSliderTwoModule),
  },
  { 
    path: 'home-four', 
    loadChildren: () => 
    import('./home-four/home-four.module').then(m => m.HomeFourModule), 
  },
  {
    path: 'doctor',
    loadChildren: () =>
    import('./doctor/doctor.module').then((m) => m.DoctorModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
    import('./patients/patients.module').then((m) => m.PatientsModule),
  },
  {
    path: 'pharmacy',
    loadChildren: () =>
    import('./pharmacy/pharmacy.module').then((m) => m.PharmacyModule),
  },
  {
    path: 'blank',
    loadChildren: () =>
    import('./blank/blank.module').then((m) => m.BlankModule),
  },
  {
    path: 'map-grid',
    loadChildren: () =>
    import('./map-grid/map-grid.module').then((m) => m.MapGridModule),
  },
  {
    path: 'map-list',
    loadChildren: () =>
    import('./map-list/map-list.module').then((m) => m.MapListModule),
  },
  {
    path: 'calender',
    loadChildren: () =>
    import('./calender/calender.module').then((m) => m.CalenderModule),
  },
  {
    path: 'blog',
    loadChildren: () => 
    import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'blog-grid',
    loadChildren: () =>
    import('./blog-grid/blog-grid.module').then((m) => m.BlogGridModule),
  },
  {
    path: 'blank',
    loadChildren: () =>
    import('./blank/blank.module').then((m) => m.BlankModule),
  },
  {
    path: 'blog-details',
    loadChildren: () =>
    import('./blog-details/blog-details.module').then((m) => m.BlogDetailsModule),
  },
  {
    path: 'login-page',
    loadChildren: () =>
    import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'change-password',
    loadChildren: () =>
    import('./change-password/change-password.module').then((m) => m.ChangePasswordModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
    import('./forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule),
  },
  {
    path: 'Register',
    loadChildren: () =>
    import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'video-call',
    loadChildren: () =>
    import('./videocall/videocall.module').then((m) => m.VideocallModule),
  },
  {
    path: 'voice-call',
    loadChildren: () =>
    import('./voicecall/voicecall.module').then((m) => m.VoicecallModule),
  },
  {
    path: 'invoice-details',
    loadChildren: () =>
    import('./invoice-details/invoice-details.module').then((m) => m.InvoiceDetailsModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
    import('./privacy-policy/privacy-policy.module').then((m) => m.PrivacyPolicyModule),
  },
  {
    path: 'terms-conditions',
    loadChildren: () =>
    import('./terms-conditions/terms-conditions.module').then((m) => m.TermsConditionsModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
    import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'pharmacy-admin',
    loadChildren: () =>
    import('./pharmacy-admin/pharmacy-admin.module').then((m) => m.PharmacyAdminModule),
  },
  { 
    path: 'patient-register-step1',
    loadChildren: () => 
    import('./patient-register-step1/patient-register-step1.module').then(m => m.PatientRegisterStep1Module), 
  },
  { 
    path: 'patient-register-step2', 
    loadChildren: () => 
    import('./patient-register-step2/patient-register-step2.module').then(m => m.PatientRegisterStep2Module), 
  },
  { 
    path: 'patient-register-step3', 
    loadChildren: () => 
    import('./patient-register-step3/patient-register-step3.module').then(m => m.PatientRegisterStep3Module), 
  },
  { 
    path: 'patient-register-step4',
    loadChildren: () => 
    import('./patient-register-step4/patient-register-step4.module').then(m => m.PatientRegisterStep4Module), 
  },
  { 
    path: 'patient-register-step5', 
    loadChildren: () => 
    import('./patient-register-step5/patient-register-step5.module').then(m => m.PatientRegisterStep5Module) },
  { 
    path: 'doctor-register-step1', 
    loadChildren: () => 
    import('./doctor-register-step1/doctor-register-step1.module').then(m => m.DoctorRegisterStep1Module), 
  },
  { 
    path: 'doctor-register-step2', 
    loadChildren: () => 
    import('./doctor-register-step2/doctor-register-step2.module').then(m => m.DoctorRegisterStep2Module), 
  },
  { 
    path: 'doctor-register-step3', 
    loadChildren: () => 
    import('./doctor-register-step3/doctor-register-step3.module').then(m => m.DoctorRegisterStep3Module), 
  },
  { path: 'home-six', loadChildren: () => import('./home-six/home-six.module').then(m => m.HomeSixModule) },
  { path: 'home-seven', loadChildren: () => import('./home-seven/home-seven.module').then(m => m.HomeSevenModule) },
  { path: 'home-eight', loadChildren: () => import('./home-eight/home-eight.module').then(m => m.HomeEightModule) },
  {
    path: 'pwa',
    loadChildren: () =>
    import('./pwa/pwa.module').then((m) => m.PwaModule),
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
