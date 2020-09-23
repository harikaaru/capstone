import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { RegisterTeamComponent } from './register-team/register-team.component';

import { WelcomeComponent } from './welcome/welcome.component';

 


const routes: Routes = [
  {path: 'register-player',component:RegisterPlayerComponent},
   {path: 'register-team',component:RegisterTeamComponent},
   {path: 'game',component:GameComponent},
   {path: 'leaderboard',component:LeaderboardComponent},
   {path: '',component:WelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
