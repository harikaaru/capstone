import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterTeamComponent,
    WelcomeComponent,
    RegisterPlayerComponent,
    GameComponent,
    LeaderboardComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
