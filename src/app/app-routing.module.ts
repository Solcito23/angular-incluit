import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuardService } from './shared/services/login-guard.service';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[LoginGuardService]
  },
  {
    path: 'my-tasks',
    component: MyTasksComponent,
    canActivate:[LoginGuardService]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
