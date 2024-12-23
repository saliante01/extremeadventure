import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DatePriceComponent } from './date-price/date-price.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SummerCampsAdminComponent } from './summer-camps-admin/summer-camps-admin.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { AdminPanelEditComponent } from './admin-panel-edit/admin-panel-edit.component';
import { HeaderDetailCampsComponent } from './header-detail-camps/header-detail-camps.component';
import { HeaderApplicationFormComponent } from './header-application-form/header-application-form.component';
import { HeaderQuestionsComponent } from './header-questions/header-questions.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HeaderSummerCampAdminComponent } from './header-summer-camp-admin/header-summer-camp-admin.component';
import { HeaderWinterCampAdminComponent } from './header-winter-camp-admin/header-winter-camp-admin.component';
import { HeaderEditCampComponent } from './header-edit-camp/header-edit-camp.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HeaderUserInformationComponent } from './header-user-information/header-user-information.component';
import { HeaderCoursesUserComponent } from './header-courses-user/header-courses-user.component';
import { HeaderAboutUsComponent } from './header-about-us/header-about-us.component';
import { HeaderRulesComponent } from './header-rules/header-rules.component';
import { HeaderWeeksComponent } from './header-weeks/header-weeks.component';
import { HeaderActivitiesComponent } from './header-activities/header-activities.component';
import { HeaderCampComponent } from './header-camp/header-camp.component';
import { HeaderAdduserComponent } from './header-adduser/header-adduser.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta principal
  { path: 'date-price', component: DatePriceComponent}, // Ruta para el navbar
  { path: 'home-admin', component: HomeAdminComponent,canActivate: [AuthGuard], data: { role: 'admin' }}, // Ruta para el navbar
  { path: 'header-activities', component: HeaderActivitiesComponent,canActivate: [AuthGuard], data: { role: 'admin' }}, // Ruta para el navbar
  { path: 'header-weeks', component: HeaderWeeksComponent,canActivate: [AuthGuard], data: { role: 'admin' }}, // Ruta para el navbar
  { path: 'header-camps', component: HeaderCampComponent,canActivate: [AuthGuard], data: { role: 'admin' }}, // Ruta para el navbar
  { path: 'home-user', component: HomeUserComponent, canActivate: [AuthGuard], data: { role: 'user' } },
  { path: 'header-summer-camp', component:HeaderSummerCampAdminComponent,canActivate: [AuthGuard], data: { role: 'admin' }}, // Ruta para el navbar
  { path: 'header-edit-camp/:id', component:HeaderEditCampComponent},
  { path: 'rules', component:HeaderRulesComponent},
  { path: 'header-myinfo', component: HeaderUserInformationComponent, canActivate: [AuthGuard], data: { role: 'user' } }, // Ruta para el navbar
  { path: 'header-mycourses', component: HeaderCoursesUserComponent, canActivate: [AuthGuard], data: { role: 'user' } }, // Ruta para el navbar
  { path: 'register-form', component: RegisterFormComponent}, // Ruta para el navbar
  { path: 'contact', component: ContactComponent}, // Ruta para el navbar
  { path: 'login', component: LoginComponent }, // Ruta para el navbar
  { path: 'register', component: RegisterFormComponent }, // Ruta para el navbar
  { path: 'application-form', component: HeaderApplicationFormComponent }, // Ruta para el navbar
  { path: 'header-detail-camps/:id', component: HeaderDetailCampsComponent }, // Ruta con parámetro dinámico
  // Ruta para el navbar
  { path: 'header-questions', component: HeaderQuestionsComponent }, // Ruta para el navbar
  { path: 'header-adduser', component: HeaderAdduserComponent,canActivate: [AuthGuard], data: { role: 'admin' } }, // Ruta para el navbar
  { path: 'header-aboutus', component: HeaderAboutUsComponent }, // Ruta para el navbar
  { path: '**', redirectTo: 'home' } // Redirección para rutas no encontradas
];
