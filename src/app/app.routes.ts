import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';




export const routes: Routes = [
 { path: '', component: HomeComponent},
 {path: 'header', component: HeaderComponent},
 { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent }
];
