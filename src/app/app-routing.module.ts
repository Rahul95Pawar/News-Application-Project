import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsheadComponent } from './newshead/newshead.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';


const routes: Routes = [
  {path:'',component:NewsheadComponent},
  {path:'business',component:BusinessComponent},
  {path:'Technology',component:TechnologyComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'Health',component:HealthComponent},
  {path:'Science',component:ScienceComponent},
  {path:'Sports',component:SportsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
