import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authorizeGuard } from './Gaurds/authorize.guard';

export const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"Home" , component:HomeComponent,canActivate:[authorizeGuard]},


  {path:"**" , component:LoginComponent},

];
