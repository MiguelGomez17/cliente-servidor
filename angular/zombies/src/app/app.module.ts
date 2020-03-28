import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { TitleComponent } from './shared/title/title.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { RegisterComponent } from './register/register.component';
import { ZombiesComponent } from './zombies/zombies.component';
import { CerebrosComponent } from './cerebros/cerebros.component';
import { appRouting } from './app.routes';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { ZombiesModalsComponent } from './modals/zombies/zombiesmodals.component';
import { CerebrosmodalsComponent } from './modals/cerebrosmodals/cerebrosmodals.component';
import { UpdateZombieComponent } from './modals/update-zombie/update-zombie.component';
import { UpdateCerebroComponent } from './modals/update-cerebro/update-cerebro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraphsComponent,
    HeaderComponent,
    SidemenuComponent,
    TitleComponent,
    SettingsComponent,
    RegisterComponent,
    ZombiesComponent,
    CerebrosComponent,
    ZombiesModalsComponent,
    CerebrosmodalsComponent,
    UpdateZombieComponent,
    UpdateCerebroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    HttpClientModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
