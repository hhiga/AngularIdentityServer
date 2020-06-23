import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { AuthGuard } from './core/helpers/auth.guard';

const routes: Routes = [
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'weather', component: WeatherForecastComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
