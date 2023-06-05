import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SiglePageComponent } from './pages/sigle-page/sigle-page.component';

const routes: Routes = [
  // {path:'/',component:HomeComponent},
  // {path:'*',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'single-page',component:SiglePageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[HomeComponent,AboutComponent,LoginComponent,RegisterComponent,SiglePageComponent]
