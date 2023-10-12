import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsheadComponent } from './newshead/newshead.component';
import {HttpClientModule} from '@angular/common/http';
import { NewapiService } from './service/newapi.service';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import {LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsheadComponent,
    BusinessComponent,
    TechnologyComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule 
  ],
  providers: [NewapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
