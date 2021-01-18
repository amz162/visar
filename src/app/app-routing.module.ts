import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ARFiltersComponent } from './ar-filters/ar-filters.component';
import './ar-games/ar-games.component.css';
import { ArGamesComponent } from './ar-games/ar-games.component';
import { ArAdCampaignsComponent } from './ar-ad-campaigns/ar-ad-campaigns.component';
import { ArEventPromotionsComponent } from './ar-event-promotions/ar-event-promotions.component';
import { PageManagementComponent } from './page-management/page-management.component';
import { ChatBotsComponent } from './chat-bots/chat-bots.component';


const routes: Routes = [

  {path: 'Aboutus' , component: AboutusComponent},
  {path: 'Projects' , component: ProjectsComponent},
  {path: 'Services' , component: ServicesComponent},
  {path: '' , component: HomeComponent},
  {path: 'ar-filters', component: ARFiltersComponent},
  {path: 'ar-games', component: ArGamesComponent},
  {path: 'ar-ad-campaigns', component: ArAdCampaignsComponent},
  {path: 'ar-event-promotions', component: ArEventPromotionsComponent},
  {path: 'page-management', component: PageManagementComponent},
  {path: 'chat-bots', component: ChatBotsComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
