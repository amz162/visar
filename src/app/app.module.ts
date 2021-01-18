import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ARFiltersComponent } from './ar-filters/ar-filters.component';
import { ArGamesComponent } from './ar-games/ar-games.component';
import { ArAdCampaignsComponent } from './ar-ad-campaigns/ar-ad-campaigns.component';
import { ArEventPromotionsComponent } from './ar-event-promotions/ar-event-promotions.component';
import { PageManagementComponent } from './page-management/page-management.component';
import { ChatBotsComponent } from './chat-bots/chat-bots.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutusComponent,
    ProjectsComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent,
    ARFiltersComponent,
    ArGamesComponent,
    ArAdCampaignsComponent,
    ArEventPromotionsComponent,
    PageManagementComponent,
    ChatBotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatVideoModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
