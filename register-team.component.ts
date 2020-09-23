import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamDataService } from '../service/data/team-data.service';
import { Team } from '../team';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit {
  //teamname='lego'
  team:Team
  constructor(
    private teamservice:TeamDataService,
    private router:Router
  ) { this.team=new Team();}

  ngOnInit() {
  }
  handleRegister(){
    this.teamservice.saveTeam(this.team).subscribe(data=>{console.log(data)})
    this.router.navigate(['register-player'])
  }
  
}
