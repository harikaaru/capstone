import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TEAM_JPA_API_URL } from 'src/app/app.constants';
import { Team } from 'src/app/team';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {

  constructor(
    private http:HttpClient
  ) { }
  saveTeam(team){
    return this.http.post(`${TEAM_JPA_API_URL}`,team)
  }
  getTeam(){
    return this.http.get<Team[]>(`${TEAM_JPA_API_URL}`)
  }
}
