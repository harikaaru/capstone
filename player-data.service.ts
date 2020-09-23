import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PLAYERBYTEAM_JPA_API_URL } from 'src/app/app.constants';
import { PLAYER_JPA_API_URL } from 'src/app/app.constants';

import { Player } from 'src/app/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor(
     private http:HttpClient
  ) { }
  savePlayer(player){
    return this.http.post(`${PLAYER_JPA_API_URL}`,player)
  }
  // getPlayers(){
  //   return this.http.get<Player[]>(`${PLAYER_JPA_API_URL}`)
  // }
  getPlayersByTeam(teamname){
    return this.http.get<Player[]>(`${PLAYERBYTEAM_JPA_API_URL}/${teamname}/players`)
  }

}
