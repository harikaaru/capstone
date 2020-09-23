import { Component, OnInit } from '@angular/core';
import { TeamDataService } from '../service/data/team-data.service';
import { Team } from '../team';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  team:Team[]
  constructor(private service:TeamDataService) { }

  ngOnInit() {
    this.service.getTeam().subscribe(data => {
      this.team = data;
    });
   
  }
 

}
